/**
 * Created by Clement on 20/07/2021
 * Created At 09:56
 */
import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {FichePedagogique} from "../Entity/FichePedagogique";
import {AuthentificationService} from '../Service/AuthentificationService';
import { validate } from "class-validator";

export class FichePedagogiqueController {

    private fichePedagogiqueRepository = getRepository(FichePedagogique);
    private authentificationService = new AuthentificationService();

    async all(request: Request, response: Response, next: NextFunction) {
        let fichePedagogiqueListe = await this.fichePedagogiqueRepository.find({ relations: ["sousPartieFichePedagogiques"] });
        if(fichePedagogiqueListe){
            return { status: 1, data: fichePedagogiqueListe }
        }else{
            return { status: 0 };
        }
    }

    async one(request: Request, response: Response, next: NextFunction) {
        let fichePedagogique = await this.fichePedagogiqueRepository.findOne(request.params.id, { relations: [ "sousPartieFichePedagogiques"] });
        if(fichePedagogique){
            return { status: 1, data: [fichePedagogique] }
        }else{
            return { status: 0 };
        }
    }

    async save(request: Request, response: Response, next: NextFunction) {
        let fichePedagogique = new FichePedagogique();
        Object.assign(fichePedagogique, {...fichePedagogique, ...request.body});
        const errors = await validate(fichePedagogique);
        if(errors.length > 0){
            return { status: 0, error: errors };
        }else{
            const fichePedagogiqueSaved = await this.fichePedagogiqueRepository.save(request.body);
            return { status: 1, data: fichePedagogiqueSaved };
        }
    }

    async update(request: Request, response: Response, next: NextFunction) {
        let fichePedagogique = new FichePedagogique();
        Object.assign(fichePedagogique, {...fichePedagogique, ...request.body});
        const errors = await validate(fichePedagogique);
        if(errors.length > 0){
            return { status: 0, error: errors };
        }else{
            const fichePedagogiqueSaved = await this.fichePedagogiqueRepository.save(request.body);
            return { status: 1, data: fichePedagogiqueSaved };
        }
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        try{
            let fichePedagogiqueToRemove = await this.fichePedagogiqueRepository.findOne(request.params.id);
            await this.fichePedagogiqueRepository.remove(fichePedagogiqueToRemove);
            return { status: 1 }
        }catch (e){
            return { status: 0, error: e }
        }
    }
}
