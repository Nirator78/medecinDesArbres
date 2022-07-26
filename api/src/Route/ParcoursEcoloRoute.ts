import { ParcoursEcoloController } from "../Controller/ParcoursEcoloController";
import { UserRole } from "../Entity/User";

export default [
    {
        method: "get",
        route: "/parcours-ecolos",
        controller: ParcoursEcoloController,
        action: "all",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER]
    }, 
    {
        method: "get",
        route: "/parcours-ecolo/:id",
        controller: ParcoursEcoloController,
        action: "one",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER]
    },
    {
        method: "get",
        route: "/user/:id/parcours-ecolo",
        controller: ParcoursEcoloController,
        action: "getByUser",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER]
    },
    {
        method: "post",
        route: "/parcours-ecolo",
        controller: ParcoursEcoloController,
        action: "save",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER]
    },
    {
        method: "put",
        route: "/parcours-ecolo/:id",
        controller: ParcoursEcoloController,
        action: "update",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER]
    },
    {
        method: "delete",
        route: "/parcours-ecolo/:id",
        controller: ParcoursEcoloController,
        action: "remove",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER]
    }
];
