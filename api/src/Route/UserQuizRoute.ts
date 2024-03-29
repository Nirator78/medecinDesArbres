import { UserQuizController } from "../Controller/UserQuizController";
import { UserRole } from "../Entity/User";

export default [
    {
        method: "get",
        route: "/user-quizs",
        controller: UserQuizController,
        action: "all",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN],
        isLoginNeeded: true
    }, 
    {
        method: "get",
        route: "/user-quiz/:id",
        controller: UserQuizController,
        action: "one",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER],
        isLoginNeeded: true
    },
    {
        method: "post",
        route: "/user-quiz",
        controller: UserQuizController,
        action: "save",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER],
        isLoginNeeded: true
    },
    {
        method: "put",
        route: "/user-quiz",
        controller: UserQuizController,
        action: "update",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER],
        isLoginNeeded: true
    },
    {
        method: "delete",
        route: "/user-quiz/:id",
        controller: UserQuizController,
        action: "remove",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER],
        isLoginNeeded: true
    },
    {
        method: "get",
        route: "/user/:id/user-quizs",
        controller: UserQuizController,
        action: "getUserQuizByUser",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER],
        isLoginNeeded: true
    }
];
