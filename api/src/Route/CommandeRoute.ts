/**
 * Created by Clement on 20/07/2021
 * Created At 09:57
 */
import { CommandeController } from "../Controller/CommandeController";
import { UserRole } from "../Entity/User";

export default [
    {
        method: "get",
        route: "/commandes",
        controller: CommandeController,
        action: "all",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN],
        isLoginNeeded: true
    },
    {
        method: "get",
        route: "/commande/:id",
        controller: CommandeController,
        action: "one",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER],
        isLoginNeeded: true
    },
    {
        method: "get",
        route: "/user/:id/commandes",
        controller: CommandeController,
        action: "getCommandeByUser",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER],
        isLoginNeeded: true
    },
    {
        method: "post",
        route: "/user/:userId/panier",
        controller: CommandeController,
        action: "createCommandeByPanier",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER],
        isLoginNeeded: true
    },
    {
        method: "post",
        route: "/commande",
        controller: CommandeController,
        action: "save",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN],
        isLoginNeeded: true
    },
    {
        method: "put",
        route: "/commande/:id",
        controller: CommandeController,
        action: "update",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN],
        isLoginNeeded: true
    },
    {
        method: "delete",
        route: "/commande/:id",
        controller: CommandeController,
        action: "remove",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN],
        isLoginNeeded: true
    }
];
