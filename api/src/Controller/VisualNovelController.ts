import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {VisualNovel} from "../Entity/VisualNovel";
import {AuthentificationService} from '../Service/AuthentificationService';

export class VisualNovelController {

    private visualNovelRepository = getRepository(VisualNovel);
    private authentificationService = new AuthentificationService();

    async all(request: Request, response: Response, next: NextFunction) {
        let visualNovelListe = await this.visualNovelRepository.find({ relations: ["visualNovelPages", "visualNovelPages.visualNovelChoix"] });

        if(visualNovelListe){
            return { status: 1, data: visualNovelListe }
        }else{
            return { status: 0 };
        }
    }

    async one(request: Request, response: Response, next: NextFunction) {
        let visualNovel = await this.visualNovelRepository.findOne(request.params.id,{ relations: ["visualNovelPages", "visualNovelPages.visualNovelChoix"] });
        if(visualNovel){
            return { status: 1, data: visualNovel }
        }else{
            return { status: 0 };
        }
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const visualNovel = await this.visualNovelRepository.save(request.body);
        return { status: 1, data: visualNovel} ;
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const visualNovel = await this.visualNovelRepository.save(request.body);
        return { status: 1, data: visualNovel} ;
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let visualNovelToRemove = await this.visualNovelRepository.findOne(request.params.id);
        await this.visualNovelRepository.remove(visualNovelToRemove);
    }

}
