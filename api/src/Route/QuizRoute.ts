import { QuizController } from "../Controller/QuizController";
import { UserRole } from "../Entity/User";

export default [
    {
        method: "get",
        route: "/quizs",
        controller: QuizController,
        action: "all",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER],
        isLoginNeeded: false
    }, 
    {
        method: "get",
        route: "/quiz/:id",
        controller: QuizController,
        action: "one",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER],
        isLoginNeeded: false
    },
    {
        method: "post",
        route: "/quiz",
        controller: QuizController,
        action: "save",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN],
        isLoginNeeded: true
    },
    {
        method: "put",
        route: "/quiz/:id",
        controller: QuizController,
        action: "update",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN],
        isLoginNeeded: true
    },
    {
        method: "delete",
        route: "/quiz/:id",
        controller: QuizController,
        action: "remove",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN],
        isLoginNeeded: true
    }
];
