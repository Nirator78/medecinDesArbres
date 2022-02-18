import {createQueryBuilder, getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Commande} from "../Entity/Commande";

export class StatistiqueController {

    private commandeRepository = getRepository(Commande);

    async commandeTopFive(request: Request, response: Response, next: NextFunction) {
        /**
         * -- Top 5
         * SELECT ART.nom AS Nom, SUM(CDELIG.quantite) AS Quantite
         * FROM test.commande_ligne AS CDELIG
         * LEFT JOIN test.commande AS CDEENT ON CDEENT.id=CDELIG.commandeId
         * LEFT JOIN test.article AS ART ON ART.id=CDELIG.articleId
         * WHERE MONTH(CDEENT.date)=MONTH(NOW())
         * GROUP BY ART.nom
         * ORDER BY SUM(CDELIG.quantite) DESC
         * LIMIT 5
         */
        let topFiveBestSeller = await createQueryBuilder()
            .select("article.nom", "article")
            .addSelect("image.url", "image")
            .addSelect("SUM(commandeLigne.quantite)", "sum")
            .from(Commande, "commande")
            .leftJoin("commande.commandeLignes", "commandeLigne")
            .leftJoin("commandeLigne.article", "article")
            .leftJoin("article.image", "image")
            .where("MONTH(commande.date)=MONTH(NOW())")
            .groupBy("article.nom")
            .addGroupBy("image.url")
            .orderBy("SUM(commandeLigne.quantite)", "DESC")
            .limit(5)
            .getRawMany();

        if(topFiveBestSeller){
            return { status: 1, data: topFiveBestSeller }
        }else{
            return { status: 0 };
        }
    }

    async commandeChiffreAffaire(request: Request, response: Response, next: NextFunction) {
        /**
         * -- Chiffre d'affaire par mois
         * SELECT YEAR(date) AS Annee, MONTHNAME(date) AS Mois, SUM(CDELIG.quantite*ART.prix) AS ChiffreAffaire
         * FROM test.commande_ligne AS CDELIG
         * LEFT JOIN test.commande AS CDEENT ON CDEENT.id=CDELIG.commandeId
         * LEFT JOIN test.article AS ART ON ART.id=CDELIG.articleId
         * GROUP BY YEAR(date), MONTHNAME(date);
         */

        let chiffreAffaireParMois = await createQueryBuilder()
            .select("YEAR(date)", "annee")
            .addSelect("MONTH(date)", "mois")
            .addSelect("SUM(commandeLigne.quantite*article.prix)", "chiffreAffaire")
            .from(Commande, "commande")
            .leftJoin("commande.commandeLignes", "commandeLigne")
            .leftJoin("commandeLigne.article", "article")
            .groupBy("YEAR(date)")
            .addGroupBy("MONTH(date)")
            .getRawMany();

        if(chiffreAffaireParMois){
            return { status: 1, data: chiffreAffaireParMois }
        }else{
            return { status: 0 };
        }
    }

    async commandePanierMoyen(request: Request, response: Response, next: NextFunction) {
        /**
         * -- Chiffre d'affaire par mois
         * SELECT YEAR(date) AS annee, MONTH(date) AS mois, CDEENT.userId, SUM(CDELIG.quantite*ART.prix) AS Panier
         * FROM test.commande_ligne AS CDELIG
         * LEFT JOIN test.commande AS CDEENT ON CDEENT.id=CDELIG.commandeId
         * LEFT JOIN test.article AS ART ON ART.id=CDELIG.articleId
         * GROUP BY YEAR(date), MONTH(date), CDEENT.userId
         */
        let panier = await createQueryBuilder()
            .select("YEAR(date)", "annee")
            .addSelect("MONTH(date)", "mois")
            .addSelect("commande.user", "user")
            .addSelect("SUM(commandeLigne.quantite*article.prix)", "panier")
            .from(Commande, "commande")
            .leftJoin("commande.commandeLignes", "commandeLigne")
            .leftJoin("commandeLigne.article", "article")
            .groupBy("YEAR(date)")
            .addGroupBy("MONTH(date)")
            .addGroupBy("commande.user");

        /**
         * SELECT annee, mois, AVG(Panier)
         * FROM (
         * SOUS REQUETE PRECEDENTE
         * ) AS X
         * GROUP BY X.annee, X.mois
         */

        let panierMoyen = await createQueryBuilder()
            .select("annee")
            .addSelect("mois")
            .addSelect("AVG(panier)", "panierMoyen")
            .from("(" + panier.getQuery() + ")", "usr")
            .groupBy("annee")
            .addGroupBy("mois")
            .getRawMany();

        if(panierMoyen){
            return { status: 1, data: panierMoyen }
        }else{
            return { status: 0 };
        }
    }
}
