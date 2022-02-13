import { ArticleController } from "../Controller/ArticleController";

export default [
    {
        method: "get",
        route: "/articles",
        controller: ArticleController,
        action: "all"
    }, 
    {
        method: "get",
        route: "/article/:id",
        controller: ArticleController,
        action: "one"
    },
    {
        method: "post",
        route: "/article",
        controller: ArticleController,
        action: "save"
    },
    {
        method: "put",
        route: "/article/:id",
        controller: ArticleController,
        action: "update"
    },
    {
        method: "delete",
        route: "/article/:id",
        controller: ArticleController,
        action: "remove"
    }
];
