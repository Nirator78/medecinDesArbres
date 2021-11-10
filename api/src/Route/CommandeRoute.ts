/**
 * Created by Clement on 20/07/2021
 * Created At 09:57
 */
import { CommandeController } from "../Controller/CommandeController";

export default [
    {
        method: "get",
        route: "/commandes",
        controller: CommandeController,
        action: "all"
    },
    {
        method: "get",
        route: "/commande/:id",
        controller: CommandeController,
        action: "one"
    },
    {
        method: "get",
        route: "/user/:id/commandes",
        controller: CommandeController,
        action: "getCommandeByUser"
    },
    {
        method: "post",
        route: "/user/:userId/boutique/:boutiqueId/panier",
        controller: CommandeController,
        action: "createCommandeByPanier"
    },
    {
        method: "post",
        route: "/commandes",
        controller: CommandeController,
        action: "save"
    },
    {
        method: "put",
        route: "/commandes",
        controller: CommandeController,
        action: "update"
    }
];
