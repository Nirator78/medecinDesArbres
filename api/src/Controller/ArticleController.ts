import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Article} from "../Entity/Article";
import {AuthentificationService} from '../Service/AuthentificationService';
import {Image} from "../Entity/Image";
import { validate } from "class-validator";

export class ArticleController {

    private articleRepository = getRepository(Article);
    private imageRepository = getRepository(Image);
    private authentificationService = new AuthentificationService();

    async all(request: Request, response: Response, next: NextFunction) {
        const option = {
            relations: ["image"]
        };

        if(request.query.limit){
            Object.assign(option, {take: request.query.limit});
        }

        let articleListe = await this.articleRepository.find(option);

        if(articleListe){
            return { status: 1, data: articleListe }
        }else{
            return { status: 0 };
        }
    }

    async one(request: Request, response: Response, next: NextFunction) {
        let article = await this.articleRepository.findOne(request.params.id, { relations: ["image"] });
        if(article){
            return { status: 1, data: article };
        }else{
            return { status: 0 };
        }
    }

    async save(request: Request, response: Response, next: NextFunction) {
        let article = new Article();
        Object.assign(article, {...article, ...request.body});
        const errors = await validate(article);
        if(errors.length > 0){
            return { status: 0, error: errors };
        }else{
            const articleSaved = await this.articleRepository.save(request.body);
            return { status: 1, data: articleSaved };
        }
    }

    async update(request: Request, response: Response, next: NextFunction) {
        let article = new Article();
        Object.assign(article, {...article, ...request.body});
        const errors = await validate(article);
        if(errors.length > 0){
            return { status: 0, error: errors };
        }else{
            const articleSaved = await this.articleRepository.save(request.body);
            return { status: 1, data: articleSaved };
        }
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        try{
            let articleToRemove = await this.articleRepository.findOne(request.params.id, {relations: ['image']});
            if(articleToRemove.image){
                // On stock l'id de l'image
                const imageId = articleToRemove.image.id;
                // On set l'image a null
                articleToRemove.image = null;
                // On update l'article
                const article = await this.articleRepository.save(articleToRemove);
                // On trouve l'image
                let imageToRemove = await this.imageRepository.findOne(imageId);
                // On delete l'image
                await this.imageRepository.remove(imageToRemove);
            }
            // On delete l'article
            await this.articleRepository.remove(articleToRemove);
            return { status: 1 };
        }catch (e){
            return { status: 0, error: e };
        }
    }

}
