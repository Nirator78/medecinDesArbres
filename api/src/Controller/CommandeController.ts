/**
 * Created by Clement on 20/07/2021
 * Created At 09:56
 */
import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Commande} from "../Entity/Commande";
import {Panier} from '../Entity/Panier';
import {PanierToCommandeService} from '../Service/PanierToCommandeService';
import {AuthentificationService} from '../Service/AuthentificationService';

export class CommandeController {

    private commandeRepository = getRepository(Commande);
    private panierRepository = getRepository(Panier);
    private panierToCommandeService = new PanierToCommandeService();
    private authentificationService = new AuthentificationService();

    async all(request: Request, response: Response, next: NextFunction) {
        let commandeListe = await this.commandeRepository.find({ relations: ["user", "commandeLignes", "commandeLignes.article"] });
        if(commandeListe){
            return { status: 1, data: commandeListe }
        }else{
            return { status: 0 };
        }
    }

    async one(request: Request, response: Response, next: NextFunction) {
        let commande = await this.commandeRepository.findOne(request.params.id, { relations: ["user", "commandeLignes", "commandeLignes.article"] });
        if(commande){
            return { status: 1, data: [commande] }
        }else{
            return { status: 0 };
        }
    }

    async getCommandeByBoutique(request: Request, response: Response, next: NextFunction) {
        const verif = await this.authentificationService.getUserInfo(request);
        let commandeListe = [];
        if(verif.boutiqueId = request.params.id){
            commandeListe = await this.commandeRepository.find({ where: {boutique: request.params.id}, relations: ["user", "commandeLignes", "commandeLignes.article"] });
            if(commandeListe){
                return { status: 1, data: commandeListe }
            }
        }
        return { status: 0 };
    }

    async getCommandeByUser(request: Request, response: Response, next: NextFunction) {
        const verif = await this.authentificationService.getUserInfo(request);
        let commandeListe = [];
        if(verif.userID = request.params.id){
            commandeListe = await this.commandeRepository.find({ where: {user: request.params.id}, relations: ["user", "commandeLignes", "commandeLignes.article"] });
            if(commandeListe){
                return { status: 1, data: commandeListe }
            }
        }
        return { status: 0 };
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const commande = await this.commandeRepository.save(request.body);
        return {status: 1, data: commande};
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const commande = await this.commandeRepository.save(request.body);
        return { status: 1, data: commande} ;
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let commandeToRemove = await this.commandeRepository.findOne(request.params.id);
        await this.commandeRepository.remove(commandeToRemove);
    }

    async createCommandeByPanier(request: Request, response: Response, next: NextFunction) {
        const { userId } = request.params;
        const verif = await this.authentificationService.getUserInfo(request);
        if(verif.userId = userId){
            // Recherche des paniers que l'utilisateur viens de valider
            let panierUtilisateur = await this.panierRepository.find({ where: {user: userId}, relations: ["user", "article"] });

            // Création de la commande et des lignes de commande
            let newCommande = await this.panierToCommandeService.create(userId, panierUtilisateur);

            return { status: 1, data: newCommande};
        }else{
            return { status: 0 };
        }
    }
}
