import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Quiz} from "../Entity/Quiz";
import {Image} from "../Entity/Image";
import {AuthentificationService} from "../Service/AuthentificationService";
import { validate } from "class-validator";

export class QuizController {

    private quizRepository = getRepository(Quiz);
    private imageRepository = getRepository(Image);
    private authentificationService = new AuthentificationService();

    async all(request: Request, response: Response, next: NextFunction) {
        let quizListe = await this.quizRepository.find({ relations: ["image", "questions", "questions.image", "questions.reponse"] });

        if(quizListe){
            return { status: 1, data: quizListe }
        }else{
            return { status: 0 };
        }
    }

    async one(request: Request, response: Response, next: NextFunction) {
        let quiz = await this.quizRepository.findOne(request.params.id,{ relations: ["image", "questions", "questions.image", "questions.reponse"] });
        if(quiz){
            return { status: 1, data: quiz }
        }else{
            return { status: 0 };
        }
    }

    async save(request: Request, response: Response, next: NextFunction) {
        let quiz = new Quiz();
        Object.assign(quiz, {...quiz, ...request.body});
        const errors = await validate(quiz);
        if(errors.length > 0){
            return { status: 0, error: errors };
        }else{
            const quizSaved = await this.quizRepository.save(request.body);
            return { status: 1, data: quizSaved };
        }
    }

    async update(request: Request, response: Response, next: NextFunction) {
        let quiz = new Quiz();
        Object.assign(quiz, {...quiz, ...request.body});
        const errors = await validate(quiz);
        if(errors.length > 0){
            return { status: 0, error: errors };
        }else{
            const quizSaved = await this.quizRepository.save(request.body);
            return { status: 1, data: quizSaved };
        }
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        try{
            let quizToRemove = await this.quizRepository.findOne(request.params.id, {relations: ["image", "questions", "questions.image"]});
            if(quizToRemove.image){
                // On stock l"id de l"image
                const imageId = quizToRemove.image.id;
                // On set l"image a null
                quizToRemove.image = null;
                // On update l"quiz
                await this.quizRepository.save(quizToRemove);
                // On trouve l"image
                let imageToRemove = await this.imageRepository.findOne(imageId);
                // On delete l"image
                await this.imageRepository.remove(imageToRemove);
            }

            // On passe sur toute les questions pour voir si il y a un image
            for (let i = 0; i < quizToRemove.questions.length; i++) {
                if(quizToRemove.questions[i].image){
                    // On stock l"id de l"image
                    const imageId = quizToRemove.questions[i].image.id;
                    // On set l"image a null
                    quizToRemove.questions[i].image = null;
                    // On update l"quiz
                    await this.quizRepository.save(quizToRemove);
                    // On trouve l"image
                    let imageToRemove = await this.imageRepository.findOne(imageId);
                    // On delete l"image
                    await this.imageRepository.remove(imageToRemove);
                }
            }

            // On delete l"quiz
            await this.quizRepository.remove(quizToRemove);
            return { status: 1 };
        }catch (e){
            return { status: 0, error: e };
        }
    }

}
