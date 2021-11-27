import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {UserVisualNovel} from "../Entity/UserVisualNovel";
import {AuthentificationService} from '../Service/AuthentificationService';

export class UserVisualNovelController {

    private userVisualNovelRepository = getRepository(UserVisualNovel);
    private authentificationService = new AuthentificationService();

    async all(request: Request, response: Response, next: NextFunction) {
        let userVisualNovelListe = await this.userVisualNovelRepository.find({ relations: [
            "user", "visualNovel", "userVisualNovelPages",
            "userVisualNovelPages.visualNovelPage", "userVisualNovelPages.userVisualNovelChoix",
            "userVisualNovelPages.userVisualNovelChoix.visualNovelChoix"
        ] });

        if(userVisualNovelListe){
            return { status: 1, data: userVisualNovelListe }
        }else{
            return { status: 0 };
        }
    }

    async one(request: Request, response: Response, next: NextFunction) {
        let userVisualNovel = await this.userVisualNovelRepository.findOne(request.params.id,{ relations: [
                "user", "visualNovel", "userVisualNovelPages",
                "userVisualNovelPages.visualNovelPage", "userVisualNovelPages.userVisualNovelChoix",
                "userVisualNovelPages.userVisualNovelChoix.visualNovelChoix"
            ] });

        if(userVisualNovel){
            return { status: 1, data: userVisualNovel }
        }else{
            return { status: 0 };
        }
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const userVisualNovel = await this.userVisualNovelRepository.save(request.body);
        return { status: 1, data: userVisualNovel } ;
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const userVisualNovel = await this.userVisualNovelRepository.save(request.body);
        return { status: 1, data: userVisualNovel } ;
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        try{
            let userVisualNovelToRemove = await this.userVisualNovelRepository.findOne(request.params.id);
            await this.userVisualNovelRepository.remove(userVisualNovelToRemove);
            return { status: 1 }
        }catch (e){
            return { status: 0, error: e }
        }
    }

    async getUserVisualNovelByUser(request: Request, response: Response, next: NextFunction) {
        let userVisualNovelListe = await this.userVisualNovelRepository.find({ where: {user: request.params.id},  relations: ["user", "visualNovel", "userQuestion", "userQuestion.question", "userQuestion.userReponse", "userQuestion.userReponse.reponse"] });

        if(userVisualNovelListe){
            return { status: 1, data: userVisualNovelListe }
        }else{
            return { status: 0 };
        }
    }

}
