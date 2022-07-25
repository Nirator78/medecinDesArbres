import { validate } from 'class-validator';
import {getRepository} from 'typeorm';
import {Commande} from '../Entity/Commande';
import {CommandeLigne} from '../Entity/CommandeLigne';
import {Panier} from '../Entity/Panier';

/**
 * Created by Clement on 24/08/2021
 * Created At 19:19
 */
export class PanierToCommandeService {

    private commandeRepository = getRepository(Commande);
    private commandeLigneRepository = getRepository(CommandeLigne);
    private panierRepository = getRepository(Panier);

    /**
     * Récupère le plus gros numéro de commande de l'incrémante de 1
     */
    async getLastNoCommande(){
        let commande = await this.commandeRepository.find({order: {numero: -1}, take: 1 });
        if(commande.length){
            return commande[0].numero + 1;
        }else{
            return 1;
        }
    }

    async create(userId, panierList) {

        // Création de la commande
        let newCommande = new Commande();
        newCommande.numero = await this.getLastNoCommande();
        newCommande.date = new Date();
        newCommande.user = userId;
        newCommande.commandeLignes = [];
        // Création des lignes de commande
        for(const panierLigne of panierList){
            let newCommandeLigne = new CommandeLigne();
            newCommandeLigne.quantite = panierLigne.quantite;
            newCommandeLigne.article = panierLigne.article;
            newCommande.commandeLignes.push(newCommandeLigne);
            this.deletePanierById(panierLigne.id);
        }

        const errors = await validate(newCommande);
        if(errors.length > 0){
            return { status: 0, error: errors };
        }else{
            const commandeSaved = await this.commandeRepository.save(newCommande);
            return { status: 1, data: commandeSaved };
        }
    }

    async deletePanierById(id){
        let panierToRemove = await this.panierRepository.findOne(id);
        await this.panierRepository.remove(panierToRemove);
    }
}
