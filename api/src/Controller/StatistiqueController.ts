import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Commande} from "../Entity/Commande";

export class StatistiqueController {

    private commandeRepository = getRepository(Commande);

    async commandeTopFive(request: Request, response: Response, next: NextFunction) {
        let commandeListe = await this.commandeRepository.find();

        if(commandeListe){
            return { status: 1, data: commandeListe }
        }else{
            return { status: 0 };
        }
    }

    async commandeChiffreAffaire(request: Request, response: Response, next: NextFunction) {
        let commandeListe = await this.commandeRepository.find();

        if(commandeListe){
            return { status: 1, data: commandeListe }
        }else{
            return { status: 0 };
        }
    }

    async commandePanierMoyen(request: Request, response: Response, next: NextFunction) {
        let commandeListe = await this.commandeRepository.find();

        if(commandeListe){
            return { status: 1, data: commandeListe }
        }else{
            return { status: 0 };
        }
    }
}
