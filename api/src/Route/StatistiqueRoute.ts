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
];
