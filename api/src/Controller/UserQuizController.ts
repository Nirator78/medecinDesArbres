import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {UserQuiz} from "../Entity/UserQuiz";
import {AuthentificationService} from '../Service/AuthentificationService';
import { validate } from "class-validator";

export class UserQuizController {

    private userQuizRepository = getRepository(UserQuiz);
    private authentificationService = new AuthentificationService();

    async all(request: Request, response: Response, next: NextFunction) {
        let userQuizListe = await this.userQuizRepository.find({ relations: ["user", "quiz", "userQuestion", "userQuestion.question", "userQuestion.question.reponse", "userQuestion.userReponse", "userQuestion.userReponse.reponse"] });

        if(userQuizListe){
            return { status: 1, data: userQuizListe }
        }else{
            return { status: 0 };
        }
    }

    async one(request: Request, response: Response, next: NextFunction) {
        let userQuiz = await this.userQuizRepository.findOne(request.params.id,{ relations: ["user", "quiz", "userQuestion", "userQuestion.question", "userQuestion.question.reponse", "userQuestion.userReponse", "userQuestion.userReponse.reponse"] });
        if(userQuiz){
            return { status: 1, data: userQuiz }
        }else{
            return { status: 0 };
        }
    }

    async save(request: Request, response: Response, next: NextFunction) {
        let userQuiz = new UserQuiz();
        Object.assign(userQuiz, {...userQuiz, ...request.body});
        const errors = await validate(userQuiz);
        if(errors.length > 0){
            return { status: 0, error: errors };
        }else{
            const userQuizSaved = await this.userQuizRepository.save(request.body);
            return { status: 1, data: userQuizSaved };
        }
    }

    async update(request: Request, response: Response, next: NextFunction) {
        let userQuiz = new UserQuiz();
        Object.assign(userQuiz, {...userQuiz, ...request.body});
        const errors = await validate(userQuiz);
        if(errors.length > 0){
            return { status: 0, error: errors };
        }else{
            const userQuizSaved = await this.userQuizRepository.save(request.body);
            return { status: 1, data: userQuizSaved };
        }
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        try{
            let userQuizToRemove = await this.userQuizRepository.findOne(request.params.id);
            await this.userQuizRepository.remove(userQuizToRemove);
            return { status: 1 }
        }catch (e){
            return { status: 0, error: e }
        }
    }

    async getUserQuizByUser(request: Request, response: Response, next: NextFunction) {
        let userQuizListe = await this.userQuizRepository.find({ where: {user: request.params.id},  relations: ["user", "quiz", "userQuestion", "userQuestion.question", "userQuestion.question.reponse", "userQuestion.userReponse", "userQuestion.userReponse.reponse"] });

        if(userQuizListe){
            return { status: 1, data: userQuizListe }
        }else{
            return { status: 0 };
        }
    }

}
