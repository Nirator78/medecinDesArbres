import { UserVisualNovelController } from "../Controller/UserVisualNovelController";

export default [
    {
        method: "get",
        route: "/user-visual-novels",
        controller: UserVisualNovelController,
        action: "all"
    }, 
    {
        method: "get",
        route: "/user-visual-novel/:id",
        controller: UserVisualNovelController,
        action: "one"
    },
    {
        method: "post",
        route: "/user-visual-novel",
        controller: UserVisualNovelController,
        action: "save"
    },
    {
        method: "put",
        route: "/user-visual-novel",
        controller: UserVisualNovelController,
        action: "update"
    },
    {
        method: "delete",
        route: "/user-visual-novel/:id",
        controller: UserVisualNovelController,
        action: "remove"
    },
    {
        method: "get",
        route: "/user/:id/user-visual-novels",
        controller: UserVisualNovelController,
        action: "getUserQuizByUser"
    }
];
