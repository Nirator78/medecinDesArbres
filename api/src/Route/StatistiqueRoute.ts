import { StatistiqueController } from "../Controller/StatistiqueController";

export default [
    {
        method: "get",
        route: "/statistique-commande-top-five",
        controller: StatistiqueController,
        action: "commandeTopFive"
    },
    {
        method: "get",
        route: "/statistique-commande-chiffre-affaire",
        controller: StatistiqueController,
        action: "commandeChiffreAffaire"
    },
    {
        method: "get",
        route: "/statistique-commande-panier-moyen",
        controller: StatistiqueController,
        action: "commandePanierMoyen"
    },
    {
        method: "get",
        route: "/statistique-quiz-meilleur-joueur",
        controller: StatistiqueController,
        action: "quizMeilleurJoueur"
    },
    {
        method: "get",
        route: "/statistique-quiz-ratio-reponse-top",
        controller: StatistiqueController,
        action: "quizRatioReponseTop"
    },
    {
        method: "get",
        route: "/statistique-quiz-score-moyen",
        controller: StatistiqueController,
        action: "quizScoreMoyen"
    },
];
