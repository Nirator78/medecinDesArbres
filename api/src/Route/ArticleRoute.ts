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
        route: "/articles",
        controller: ArticleController,
        action: "save"
    },
    {
        method: "put",
        route: "/articles",
        controller: ArticleController,
        action: "update"
    }
];
