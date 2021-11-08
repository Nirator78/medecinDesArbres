import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Article} from "../Entity/Article";
import {AuthentificationService} from '../Service/AuthentificationService';

export class ArticleController {

    private articleRepository = getRepository(Article);
    private authentificationService = new AuthentificationService();

    async all(request: Request, response: Response, next: NextFunction) {
        let articleListe = await this.articleRepository.find();

        if(articleListe){
            return { status: 1, data: articleListe }
        }else{
            return { status: 0 };
        }
    }

    async one(request: Request, response: Response, next: NextFunction) {
        let article = await this.articleRepository.findOne(request.params.id);
        if(article){
            return { status: 1, data: article }
        }else{
            return { status: 0 };
        }
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const article = await this.articleRepository.save(request.body);
        return { status: 1, data: article} ;
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const article = await this.articleRepository.save(request.body);
        return { status: 1, data: article} ;
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let articleToRemove = await this.articleRepository.findOne(request.params.id);
        await this.articleRepository.remove(articleToRemove);
    }

}
