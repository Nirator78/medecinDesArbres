import { ArticleController } from "../Controller/ArticleController";
import { UserRole } from "../Entity/User";

export default [
    {
        method: "get",
        route: "/articles",
        controller: ArticleController,
        action: "all",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER]
    }, 
    {
        method: "get",
        route: "/article/:id",
        controller: ArticleController,
        action: "one",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER]
    },
    {
        method: "post",
        route: "/article",
        controller: ArticleController,
        action: "save",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN]
    },
    {
        method: "put",
        route: "/article/:id",
        controller: ArticleController,
        action: "update",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN]
    },
    {
        method: "delete",
        route: "/article/:id",
        controller: ArticleController,
        action: "remove",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN]
    }
];
