/**
 * Created by Clement on 20/07/2021
 * Created At 09:30
 */
import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Panier} from "../Entity/Panier";
import {AuthentificationService} from '../Service/AuthentificationService';
import { validate } from "class-validator";

export class PanierController {

    private panierRepository = getRepository(Panier);
    private authentificationService = new AuthentificationService();

    async all(request: Request, response: Response, next: NextFunction) {
        let panierListe = await this.panierRepository.find({ relations: ["article", "user", "article.image"] });

        if(panierListe){
            return { status: 1, data: panierListe }
        }else{
            return { status: 0 };
        }
    }

    async one(request: Request, response: Response, next: NextFunction) {
        let panier = await this.panierRepository.findOne(request.params.id,{ relations: ["article", "user", "article.image"] });
        if(panier){
            return { status: 1, data: [panier] }
        }else{
            return { status: 0 };
        }
    }

    async getPanierByUser(request: Request, response: Response, next: NextFunction) {
        const verif = await this.authentificationService.getUserInfo(request);
        let paniers = [];
        if(verif.userId.id == request.params.id){
            paniers = await this.panierRepository.find({ where: {user: request.params.id}, relations: ["article", "user", "article.image"]});
            if(paniers){
                return { status: 1, data: paniers }
            }
        }
        return { status: 0 };
    }

    async save(request: Request, response: Response, next: NextFunction) {
        let panier = new Panier();
        Object.assign(panier, {...panier, ...request.body});
        const errors = await validate(panier);
        if(errors.length > 0){
            return { status: 0, error: errors };
        }else{
            const panierSaved = await this.panierRepository.save(request.body);
            return { status: 1, data: panierSaved };
        }
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const panier = await this.panierRepository.findOne(request.params.id);
        Object.assign(panier, {...panier, ...request.body});
        const errors = await validate(panier);
        if(errors.length > 0){
            return { status: 0, error: errors };
        }else{
            const panierSaved = await this.panierRepository.save(panier);
            return { status: 1, data: panierSaved };
        }
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        try{
            let panierToRemove = await this.panierRepository.findOne(request.params.id);
            await this.panierRepository.remove(panierToRemove);
            return { status: 1 }
        }catch (e){
            return { status: 0, error: e }
        }
    }

}
