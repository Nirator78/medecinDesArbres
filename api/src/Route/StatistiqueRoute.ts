import { StatistiqueController } from "../Controller/StatistiqueController";
import { UserRole } from "../Entity/User";

export default [
    {
        method: "get",
        route: "/statistique-commande-top-five",
        controller: StatistiqueController,
        action: "commandeTopFive",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN]
    },
    {
        method: "get",
        route: "/statistique-commande-chiffre-affaire",
        controller: StatistiqueController,
        action: "commandeChiffreAffaire",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN]
    },
    {
        method: "get",
        route: "/statistique-commande-panier-moyen",
        controller: StatistiqueController,
        action: "commandePanierMoyen",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN]
    },
    {
        method: "get",
        route: "/statistique-quiz-meilleur-joueur",
        controller: StatistiqueController,
        action: "quizMeilleurJoueur",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN]
    },
    {
        method: "get",
        route: "/statistique-quiz-ratio-reponse-top",
        controller: StatistiqueController,
        action: "quizRatioReponseTop",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN]
    },
    {
        method: "get",
        route: "/statistique-quiz-score-moyen",
        controller: StatistiqueController,
        action: "quizScoreMoyen",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN]
    },
    {
        method: "get",
        route: "/statistique-parcours-ecolo",
        controller: StatistiqueController,
        action: "parcoursEcoloSac",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN]
    }
];
