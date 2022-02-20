import { QuizController } from "../Controller/QuizController";

export default [
    {
        method: "get",
        route: "/quizs",
        controller: QuizController,
        action: "all"
    }, 
    {
        method: "get",
        route: "/quiz/:id",
        controller: QuizController,
        action: "one"
    },
    {
        method: "post",
        route: "/quiz",
        controller: QuizController,
        action: "save"
    },
    {
        method: "put",
        route: "/quiz/:id",
        controller: QuizController,
        action: "update"
    },
    {
        method: "delete",
        route: "/quiz/:id",
        controller: QuizController,
        action: "remove"
    }
];
