/**
 * Created by Clement on 20/07/2021
 * Created At 09:56
 */
import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Commande } from "../Entity/Commande";
import { Panier } from '../Entity/Panier';
import { PanierToCommandeService } from '../Service/PanierToCommandeService';
import { AuthentificationService } from '../Service/AuthentificationService';
import { validate } from "class-validator";

export class CommandeController {

    private commandeRepository = getRepository(Commande);
    private panierRepository = getRepository(Panier);
    private panierToCommandeService = new PanierToCommandeService();
    private authentificationService = new AuthentificationService();

    async all(request: Request, response: Response, next: NextFunction) {
        let commandeListe = await this.commandeRepository.find({ relations: ["user", "commandeLignes", "commandeLignes.article", "commandeLignes.article.image"] });
        if (commandeListe) {
            return { status: 1, data: commandeListe }
        } else {
            return { status: 0 };
        }
    }

    async one(request: Request, response: Response, next: NextFunction) {
        let commande = await this.commandeRepository.findOne(request.params.id, { relations: ["user", "commandeLignes", "commandeLignes.article", "commandeLignes.article.image"] });
        if (commande) {
            return { status: 1, data: [commande] }
        } else {
            return { status: 0 };
        }
    }

    async getCommandeByUser(request: Request, response: Response, next: NextFunction) {
        const verif = await this.authentificationService.getUserInfo(request);
        let commandeListe = [];
        if (verif.userId.id == request.params.id) {
            commandeListe = await this.commandeRepository.find({ where: { user: request.params.id }, relations: ["user", "commandeLignes", "commandeLignes.article", "commandeLignes.article.image"] });
            if (commandeListe) {
                return { status: 1, data: commandeListe }
            }
        }
        return { status: 0 };
    }

    async save(request: Request, response: Response, next: NextFunction) {
        let commande = new Commande();
        Object.assign(commande, {...commande, ...request.body});
        const errors = await validate(commande);
        if(errors.length > 0){
            return { status: 0, error: errors };
        }else{
            const commandeSaved = await this.commandeRepository.save(request.body);
            return { status: 1, data: commandeSaved };
        }
    }

    async update(request: Request, response: Response, next: NextFunction) {
        let commande = new Commande();
        Object.assign(commande, {...commande, ...request.body});
        const errors = await validate(commande);
        if(errors.length > 0){
            return { status: 0, error: errors };
        }else{
            const commandeSaved = await this.commandeRepository.save(request.body);
            return { status: 1, data: commandeSaved };
        }
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        try {
            let commandeToRemove = await this.commandeRepository.findOne(request.params.id);
            await this.commandeRepository.remove(commandeToRemove);
            return { status: 1 }
        } catch (e) {
            return { status: 0, error: e }
        }
    }

    async createCommandeByPanier(request: Request, response: Response, next: NextFunction) {
        const { userId } = request.params;
        const verif = await this.authentificationService.getUserInfo(request);
        if (verif.userId.id == userId) {
            // Recherche des paniers que l'utilisateur viens de valider
            let panierUtilisateur = await this.panierRepository.find({ where: { user: userId }, relations: ["user", "article"] });

            // Création de la commande et des lignes de commande
            return await this.panierToCommandeService.create(userId, panierUtilisateur);
        } else {
            return { status: 0 };
        }
    }
}
