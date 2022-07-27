import {getRepository, Like} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Ville} from "../Entity/Ville";
import {AuthentificationService} from '../Service/AuthentificationService';
import { validate } from "class-validator";

export class VilleController {

    private villeRepository = getRepository(Ville);
    private authentificationService = new AuthentificationService();

    async all(request: Request, response: Response, next: NextFunction) {
        const option = {};

        if(request.query.limit){
            Object.assign(option, {take: request.query.limit});
        }

        let villeListe = await this.villeRepository.find(option);

        if(villeListe){
            return { status: 1, data: villeListe }
        }else{
            return { status: 0 };
        }
    }

    async one(request: Request, response: Response, next: NextFunction) {
        let ville = await this.villeRepository.findOne(request.params.id);
        if(ville){
            return { status: 1, data: ville }
        }else{
            return { status: 0 };
        }
    }

    async save(request: Request, response: Response, next: NextFunction) {
        let ville = new Ville();
        Object.assign(ville, {...ville, ...request.body});
        const errors = await validate(ville);
        if(errors.length > 0){
            return { status: 0, error: errors };
        }else{
            const villeSaved = await this.villeRepository.save(request.body);
            return { status: 1, data: villeSaved };
        }
    }

    async update(request: Request, response: Response, next: NextFunction) {
        let conference = new Ville();
        Object.assign(conference, {...conference, ...request.body});
        const errors = await validate(conference);
        if(errors.length > 0){
            return { status: 0, error: errors };
        }else{
            const villeSaved = await this.villeRepository.save(request.body);
            return { status: 1, data: villeSaved };
        }
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        try{
            let villeToRemove = await this.villeRepository.findOne(request.params.id);
            await this.villeRepository.remove(villeToRemove);
            return { status: 1 }
        }catch (e){
            return { status: 0, error: e }
        }
    }

}
