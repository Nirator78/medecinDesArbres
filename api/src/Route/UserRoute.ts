import { UserController } from "../Controller/UserController";

export default [
    {
        method: "get",
        route: "/users",
        controller: UserController,
        action: "all"
    }, 
    {
        method: "get",
        route: "/user/:id",
        controller: UserController,
        action: "one"
    }, 
    {
        method: "post",
        route: "/users",
        controller: UserController,
        action: "save"
    },
    {
        method: "put",
        route: "/users",
        controller: UserController,
        action: "update"
    },
    {
        method: "post",
        route: "/users/login",
        controller: UserController,
        action: "login"
    },
    {
        method: "post",
        route: "/users/forgot-password-request",
        controller: UserController,
        action: "forgotPasswordRequest"
    },
    {
        method: "post",
        route: "/users/forgot-password-response",
        controller: UserController,
        action: "forgotPasswordResponse"
    }
];
