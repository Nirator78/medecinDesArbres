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
        route: "/user",
        controller: UserController,
        action: "save"
    },
    {
        method: "put",
        route: "/user",
        controller: UserController,
        action: "update"
    },
    {
        method: "post",
        route: "/user/login",
        controller: UserController,
        action: "login"
    },
    {
        method: "post",
        route: "/user/forgot-password-request",
        controller: UserController,
        action: "forgotPasswordRequest"
    },
    {
        method: "post",
        route: "/user/forgot-password-response",
        controller: UserController,
        action: "forgotPasswordResponse"
    }
];
