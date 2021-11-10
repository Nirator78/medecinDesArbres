import { FichePedagogiqueController } from "../Controller/FichePedagogiqueController";

export default [
    {
        method: "get",
        route: "/fiche-pedagogique",
        controller: FichePedagogiqueController,
        action: "all"
    }, 
    {
        method: "get",
        route: "/fiche-pedagogique/:id",
        controller: FichePedagogiqueController,
        action: "one"
    }, 
    {
        method: "post",
        route: "/fiche-pedagogique",
        controller: FichePedagogiqueController,
        action: "save"
    },
    {
        method: "put",
        route: "/fiche-pedagogique",
        controller: FichePedagogiqueController,
        action: "update"
    },
    {
        method: "delete",
        route: "/fiche-pedagogique/:id",
        controller: FichePedagogiqueController,
        action: "remove"
    }
];
