import { ArticleController } from "../Controller/ArticleController";
import { UserRole } from "../Entity/User";

export default [
    {
        method: "get",
        route: "/articles",
        controller: ArticleController,
        action: "all",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER],
        isLoginNeeded: false
    }, 
    {
        method: "get",
        route: "/article/:id",
        controller: ArticleController,
        action: "one",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER],
        isLoginNeeded: false
    },
    {
        method: "post",
        route: "/article",
        controller: ArticleController,
        action: "save",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN],
        isLoginNeeded: true
    },
    {
        method: "put",
        route: "/article/:id",
        controller: ArticleController,
        action: "update",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN],
        isLoginNeeded: true
    },
    {
        method: "delete",
        route: "/article/:id",
        controller: ArticleController,
        action: "remove",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN],
        isLoginNeeded: true
    }
];
