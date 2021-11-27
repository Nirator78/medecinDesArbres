import { ConferenceController } from "../Controller/ConferenceController";

export default [
    {
        method: "get",
        route: "/conferences",
        controller: ConferenceController,
        action: "all"
    }, 
    {
        method: "get",
        route: "/conference/:id",
        controller: ConferenceController,
        action: "one"
    }, 
    {
        method: "post",
        route: "/conference",
        controller: ConferenceController,
        action: "save"
    },
    {
        method: "put",
        route: "/conference",
        controller: ConferenceController,
        action: "update"
    },
    {
        method: "delete",
        route: "/conference/:id",
        controller: ConferenceController,
        action: "remove"
    }
];
