import { ParcoursEcoloController } from "../Controller/ParcoursEcoloController";

export default [
    {
        method: "get",
        route: "/parcours-ecolos",
        controller: ParcoursEcoloController,
        action: "all"
    }, 
    {
        method: "get",
        route: "/parcours-ecolo/:id",
        controller: ParcoursEcoloController,
        action: "one"
    },
    {
        method: "post",
        route: "/parcours-ecolo",
        controller: ParcoursEcoloController,
        action: "save"
    },
    {
        method: "put",
        route: "/parcours-ecolo/:id",
        controller: ParcoursEcoloController,
        action: "update"
    },
    {
        method: "delete",
        route: "/parcours-ecolo/:id",
        controller: ParcoursEcoloController,
        action: "remove"
    }
];
