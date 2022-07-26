import { UserController } from "../Controller/UserController";
import { UserRole } from "../Entity/User";

export default [
    {
        method: "get",
        route: "/users",
        controller: UserController,
        action: "all",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN],
        isLoginNeeded: true
    }, 
    {
        method: "get",
        route: "/user/:id",
        controller: UserController,
        action: "one",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER],
        isLoginNeeded: true
    }, 
    {
        method: "post",
        route: "/user",
        controller: UserController,
        action: "save",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER],
        isLoginNeeded: true
    },
    {
        method: "put",
        route: "/user/:id",
        controller: UserController,
        action: "update",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER],
        isLoginNeeded: true
    },
    {
        method: "delete",
        route: "/user/:id",
        controller: UserController,
        action: "remove",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN],
        isLoginNeeded: true
    },
    {
        method: "post",
        route: "/user/login",
        controller: UserController,
        action: "login",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER],
        isLoginNeeded: false
    },
    {
        method: "post",
        route: "/user/login-admin",
        controller: UserController,
        action: "loginAdmin",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN],
        isLoginNeeded: false
    },
    {
        method: "post",
        route: "/user/forgot-password-request",
        controller: UserController,
        action: "forgotPasswordRequest",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER],
        isLoginNeeded: false
    },
    {
        method: "post",
        route: "/user/forgot-password-response",
        controller: UserController,
        action: "forgotPasswordResponse",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER],
        isLoginNeeded: false
    },
    {
        method: "get",
        route: "/password-keys",
        controller: UserController,
        action: "getAllPasswordKey",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN],
        isLoginNeeded: true
    },
    {
        method: "delete",
        route: "/password-key/:id",
        controller: UserController,
        action: "removePasswordKeysToRemove",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN],
        isLoginNeeded: true
    }
];
