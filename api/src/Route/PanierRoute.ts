/**
 * Created by Clement on 20/07/2021
 * Created At 09:29
 */
import { PanierController } from "../Controller/PanierController";

export default [
    {
        method: "get",
        route: "/paniers",
        controller: PanierController,
        action: "all"
    },
    {
        method: "get",
        route: "/panier/:id",
        controller: PanierController,
        action: "one"
    },
    {
        method: "get",
        route: "/user/:id/paniers",
        controller: PanierController,
        action: "getPanierByUser"
    },
    {
        method: "post",
        route: "/paniers",
        controller: PanierController,
        action: "save"
    },
    {
        method: "put",
        route: "/paniers",
        controller: PanierController,
        action: "update"
    }
];
