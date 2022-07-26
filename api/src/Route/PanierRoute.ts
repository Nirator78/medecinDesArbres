/**
 * Created by Clement on 20/07/2021
 * Created At 09:29
 */
import { PanierController } from "../Controller/PanierController";
import { UserRole } from "../Entity/User";

export default [
    {
        method: "get",
        route: "/paniers",
        controller: PanierController,
        action: "all",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER],
        isLoginNeeded: true
    },
    {
        method: "get",
        route: "/panier/:id",
        controller: PanierController,
        action: "one",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER],
        isLoginNeeded: true
    },
    {
        method: "get",
        route: "/user/:id/paniers",
        controller: PanierController,
        action: "getPanierByUser",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER],
        isLoginNeeded: true
    },
    {
        method: "post",
        route: "/panier",
        controller: PanierController,
        action: "save",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER],
        isLoginNeeded: true
    },
    {
        method: "put",
        route: "/panier/:id",
        controller: PanierController,
        action: "update",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER],
        isLoginNeeded: true
    },
    {
        method: "delete",
        route: "/panier/:id",
        controller: PanierController,
        action: "remove",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER],
        isLoginNeeded: true
    }
];
