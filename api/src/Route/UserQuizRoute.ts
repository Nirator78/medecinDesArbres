import { UserQuizController } from "../Controller/UserQuizController";

export default [
    {
        method: "get",
        route: "/user-quizs",
        controller: UserQuizController,
        action: "all"
    }, 
    {
        method: "get",
        route: "/user-quiz/:id",
        controller: UserQuizController,
        action: "one"
    },
    {
        method: "post",
        route: "/user-quiz",
        controller: UserQuizController,
        action: "save"
    },
    {
        method: "put",
        route: "/user-quiz",
        controller: UserQuizController,
        action: "update"
    },
    {
        method: "delete",
        route: "/user-quiz/:id",
        controller: UserQuizController,
        action: "remove"
    }
];
