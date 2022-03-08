import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {ParcoursEcolo} from "../Entity/ParcoursEcolo";
import {AuthentificationService} from '../Service/AuthentificationService';

export class ParcoursEcoloController {

    private parcoursEcoloRepository = getRepository(ParcoursEcolo);
    private authentificationService = new AuthentificationService();

    async all(request: Request, response: Response, next: NextFunction) {
        let parcoursEcoloListe = await this.parcoursEcoloRepository.find({relations: ["user", "ville", "image"]});

        if(parcoursEcoloListe){
            return { status: 1, data: parcoursEcoloListe }
        }else{
            return { status: 0 };
        }
    }

    async one(request: Request, response: Response, next: NextFunction) {
        let parcoursEcolo = await this.parcoursEcoloRepository.findOne(request.params.id, {relations: ["user", "ville", "image"]});
        if(parcoursEcolo){
            return { status: 1, data: parcoursEcolo }
        }else{
            return { status: 0 };
        }
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const parcoursEcolo = await this.parcoursEcoloRepository.save(request.body);
        return { status: 1, data: parcoursEcolo } ;
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const parcoursEcolo = await this.parcoursEcoloRepository.save(request.body);
        return { status: 1, data: parcoursEcolo } ;
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        try{
            let parcoursEcoloToRemove = await this.parcoursEcoloRepository.findOne(request.params.id);
            await this.parcoursEcoloRepository.remove(parcoursEcoloToRemove);
            return { status: 1 }
        }catch (e){
            return { status: 0, error: e }
        }
    }

}
