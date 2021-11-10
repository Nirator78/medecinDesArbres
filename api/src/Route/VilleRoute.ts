/**
 * Created by Clement on 20/07/2021
 * Created At 09:29
 */
import { VilleController } from "../Controller/VilleController";

export default [
    {
        method: "get",
        route: "/villes",
        controller: VilleController,
        action: "all"
    },
    {
        method: "get",
        route: "/ville/:id",
        controller: VilleController,
        action: "one"
    },
    {
        method: "post",
        route: "/ville",
        controller: VilleController,
        action: "save"
    },
    {
        method: "put",
        route: "/ville",
        controller: VilleController,
        action: "update"
    },
    {
        method: "delete",
        route: "/ville/:id",
        controller: VilleController,
        action: "remove"
    }
];
