import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {ParcoursEcolo} from "../Entity/ParcoursEcolo";
import {Image} from "../Entity/Image";
import {AuthentificationService} from '../Service/AuthentificationService';

export class ParcoursEcoloController {

    private parcoursEcoloRepository = getRepository(ParcoursEcolo);
    private imageRepository = getRepository(Image);
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
            let parcoursEcoloToRemove = await this.parcoursEcoloRepository.findOne(request.params.id, {relations: ['image']});
            if(parcoursEcoloToRemove.image){
                // On stock l'id de l'image
                const imageId = parcoursEcoloToRemove.image.id;
                // On set l'image a null
                parcoursEcoloToRemove.image = null;
                // On update l'parcoursEcolo
                const parcoursEcolo = await this.parcoursEcoloRepository.save(parcoursEcoloToRemove);
                // On trouve l'image
                let imageToRemove = await this.imageRepository.findOne(imageId);
                // On delete l'image
                await this.imageRepository.remove(imageToRemove);
            }
            // On delete l'parcoursEcolo
            await this.parcoursEcoloRepository.remove(parcoursEcoloToRemove);
            return { status: 1 };
        }catch (e){
            return { status: 0, error: e };
        }
    }
    
    async getByUser(request: Request, response: Response, next: NextFunction) {
        const verif = await this.authentificationService.getUserInfo(request);
        let parcoursEcoloListe = [];
        if(verif.userId.id == request.params.id){
            parcoursEcoloListe = await this.parcoursEcoloRepository.find({ where: {user: request.params.id}, relations: ["user", "ville", "image"] });
            if(parcoursEcoloListe){
                return { status: 1, data: parcoursEcoloListe }
            }else{
                return { status: 0 };
            }
        }else{
            return { status: 0 };
        }
    }

}
