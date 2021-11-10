import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Ville} from "../Entity/Ville";
import {AuthentificationService} from '../Service/AuthentificationService';

export class VilleController {

    private villeRepository = getRepository(Ville);
    private authentificationService = new AuthentificationService();

    async all(request: Request, response: Response, next: NextFunction) {
        let villeListe = await this.villeRepository.find();

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
        const ville = await this.villeRepository.save(request.body);
        return { status: 1, data: ville} ;
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const ville = await this.villeRepository.save(request.body);
        return { status: 1, data: ville} ;
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let villeToRemove = await this.villeRepository.findOne(request.params.id);
        await this.villeRepository.remove(villeToRemove);
    }

}
