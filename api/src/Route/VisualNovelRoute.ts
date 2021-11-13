import { VisualNovelController } from "../Controller/VisualNovelController";

export default [
    {
        method: "get",
        route: "/visual-novels",
        controller: VisualNovelController,
        action: "all"
    },
    {
        method: "get",
        route: "/visual-novel/:id",
        controller: VisualNovelController,
        action: "one"
    },
    {
        method: "post",
        route: "/visual-novel",
        controller: VisualNovelController,
        action: "save"
    },
    {
        method: "put",
        route: "/visual-novel",
        controller: VisualNovelController,
        action: "update"
    },
    {
        method: "delete",
        route: "/visual-novel/:id",
        controller: VisualNovelController,
        action: "remove"
    }
];
