/**
 * Created by Clement on 20/07/2021
 * Created At 09:56
 */
import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {FichePedagogique} from "../Entity/FichePedagogique";
import {AuthentificationService} from '../Service/AuthentificationService';

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
        const fichePedagogique = await this.fichePedagogiqueRepository.save(request.body);
        return {status: 1, data: fichePedagogique};
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const fichePedagogique = await this.fichePedagogiqueRepository.save(request.body);
        return { status: 1, data: fichePedagogique} ;
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let fichePedagogiqueToRemove = await this.fichePedagogiqueRepository.findOne(request.params.id);
        await this.fichePedagogiqueRepository.remove(fichePedagogiqueToRemove);
    }
}
