import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Quiz} from "../Entity/Quiz";
import {AuthentificationService} from '../Service/AuthentificationService';

export class QuizController {

    private quizRepository = getRepository(Quiz);
    private authentificationService = new AuthentificationService();

    async all(request: Request, response: Response, next: NextFunction) {
        let quizListe = await this.quizRepository.find({ relations: ["questions", "questions.reponse"] });

        if(quizListe){
            return { status: 1, data: quizListe }
        }else{
            return { status: 0 };
        }
    }

    async one(request: Request, response: Response, next: NextFunction) {
        let quiz = await this.quizRepository.findOne(request.params.id,{ relations: ["questions", "questions.reponse"] });
        if(quiz){
            return { status: 1, data: quiz }
        }else{
            return { status: 0 };
        }
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const quiz = await this.quizRepository.save(request.body);
        return { status: 1, data: quiz} ;
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const quiz = await this.quizRepository.save(request.body);
        return { status: 1, data: quiz} ;
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let quizToRemove = await this.quizRepository.findOne(request.params.id);
        await this.quizRepository.remove(quizToRemove);
    }

}
