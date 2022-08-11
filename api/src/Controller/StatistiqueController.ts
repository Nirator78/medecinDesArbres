import {createQueryBuilder, getManager} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Commande} from "../Entity/Commande";

export class StatistiqueController {
    entityManager = getManager();

    async commandeTopFive(request: Request, response: Response, next: NextFunction) {
        /**
         * -- Top 5
         * SELECT ART.nom AS Nom, SUM(CDELIG.quantite) AS Quantite
         * FROM commande_ligne AS CDELIG
         * LEFT JOIN commande AS CDEENT ON CDEENT.id=CDELIG.commandeId
         * LEFT JOIN article AS ART ON ART.id=CDELIG.articleId
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
         * FROM commande_ligne AS CDELIG
         * LEFT JOIN commande AS CDEENT ON CDEENT.id=CDELIG.commandeId
         * LEFT JOIN article AS ART ON ART.id=CDELIG.articleId
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
         * FROM commande_ligne AS CDELIG
         * LEFT JOIN commande AS CDEENT ON CDEENT.id=CDELIG.commandeId
         * LEFT JOIN article AS ART ON ART.id=CDELIG.articleId
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

    async quizMeilleurJoueur(request: Request, response: Response, next: NextFunction) {

        const quizMeilleurJoueurList = await this.entityManager.query(`
            SELECT 
            nom, prenom,
            (NbBonneRéponse/(NbBonneRéponse+NbMauvaiseRéponse))*100 AS tauxReussite 
            FROM (
            SELECT 
            USER.nom AS nom, USER.prenom AS prenom,
            SUM(CASE 
            WHEN QR.bonne=1 THEN 1
                ELSE 0
            END) AS NbBonneRéponse,
            SUM(CASE 
            WHEN QR.bonne=0 THEN 1
                ELSE 0
            END) AS NbMauvaiseRéponse
            FROM user_reponse AS UR
            LEFT JOIN user_question AS UQ ON UQ.ID=UR.userQuestionId
            LEFT JOIN quiz_question AS QQ ON QQ.id=UQ.questionId
            LEFT JOIN quiz_reponse AS QR ON QR.id=UR.reponseId
            LEFT JOIN user_quiz AS UQZ ON UQZ.id=UQ.userQuizId
            LEFT JOIN user AS USER ON USER.id=UQZ.userId
            GROUP BY USER.nom, USER.prenom) AS X
            ORDER BY tauxReussite DESC
        `);

        if(quizMeilleurJoueurList){
            return { status: 1, data: quizMeilleurJoueurList }
        }else{
            return { status: 0 };
        }
    }

    async quizRatioReponseTop(request: Request, response: Response, next: NextFunction) {

        const quizRatioReponseTopList = await this.entityManager.query(`
            SELECT 
            USER.nom AS nom, USER.prenom AS prenom,
            SUM(CASE 
                WHEN QR.bonne = 1 THEN 1
                ELSE 0
            END) AS nbBonneReponse,
            SUM(CASE 
                WHEN QR.bonne = 0 THEN 1
                ELSE 0
            END) AS nbMauvaiseReponse
            FROM user_reponse AS UR
            LEFT JOIN user_question AS UQ ON UQ.ID=UR.userQuestionId
            LEFT JOIN quiz_question AS QQ ON QQ.id=UQ.questionId
            LEFT JOIN quiz_reponse AS QR ON QR.id=UR.reponseId
            LEFT JOIN user_quiz AS UQZ ON UQZ.id=UQ.userQuizId
            LEFT JOIN user AS USER ON USER.id=UQZ.userId
            GROUP BY USER.nom, USER.prenom
        `);

        if(quizRatioReponseTopList){
            return { status: 1, data: quizRatioReponseTopList }
        }else{
            return { status: 0 };
        }
    }

    async quizScoreMoyen(request: Request, response: Response, next: NextFunction) {
        let quizScoreMoyenList = await this.entityManager.query(`
            SELECT 
            titre,
            (NbBonneRéponse/(NbBonneRéponse+NbMauvaiseRéponse))*100 AS tauxReussite 
            FROM (
                SELECT 
                QUIZ.titre AS titre,
                SUM(CASE 
                WHEN QR.bonne = 1 THEN 1
                ELSE 0
                END) AS NbBonneRéponse,
                SUM(CASE 
                WHEN QR.bonne = 0 THEN 1
                ELSE 0
                END) AS NbMauvaiseRéponse
                FROM quiz AS QUIZ
                LEFT JOIN quiz_question AS QQ ON QQ.quizId=QUIZ.id
                LEFT JOIN quiz_reponse AS QR ON QR.quizQuestionId=QQ.id
                LEFT JOIN user_reponse AS UR ON UR.reponseId=QR.id
                WHERE UR.id IS NOT NULL
                GROUP BY QUIZ.titre
            ) AS X
        ;
        `);

        if(quizScoreMoyenList){
            return { status: 1, data: quizScoreMoyenList }
        }else{
            return { status: 0 };
        }
    }

    async parcoursEcoloSac(request: Request, response: Response, next: NextFunction) {
        let parcoursEcoloSacList = await this.entityManager.query(`
            SELECT 
            CONCAT(U.nom, ' ', U.prenom) AS user,
            SUM(PE.nbSac) AS nbSac
            FROM parcours_ecolo PE
            LEFT JOIN user AS U ON PE.userId=U.id
            GROUP BY CONCAT(U.nom, ' ', U.prenom)
            ORDER BY nbSac DESC
            LIMIT 5;
        ;
        `);

        if(parcoursEcoloSacList){
            return { status: 1, data: parcoursEcoloSacList }
        }else{
            return { status: 0 };
        }
    }

    async parcoursEcoloTopFive(request: Request, response: Response, next: NextFunction) {
        let parcoursEcoloSacListTopFive = await this.entityManager.query(`
            SELECT 
            CONCAT(U.nom, ' ', U.prenom) AS user,
            nbSac
            FROM parcours_ecolo PE
            LEFT JOIN user AS U ON PE.userId=U.id
            ORDER BY PE.id DESC
            LIMIT 5;
            ;
        `);

        if(parcoursEcoloSacListTopFive){
            return { status: 1, data: parcoursEcoloSacListTopFive }
        }else{
            return { status: 0 };
        }
    }
}
