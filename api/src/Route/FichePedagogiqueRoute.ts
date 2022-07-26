import { FichePedagogiqueController } from "../Controller/FichePedagogiqueController";
import { UserRole } from "../Entity/User";

export default [
    {
        method: "get",
        route: "/fiche-pedagogiques",
        controller: FichePedagogiqueController,
        action: "all",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER],
        isLoginNeeded: false
    }, 
    {
        method: "get",
        route: "/fiche-pedagogique/:id",
        controller: FichePedagogiqueController,
        action: "one",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER],
        isLoginNeeded: false
    }, 
    {
        method: "post",
        route: "/fiche-pedagogique",
        controller: FichePedagogiqueController,
        action: "save",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN],
        isLoginNeeded: true
    },
    {
        method: "put",
        route: "/fiche-pedagogique/:id",
        controller: FichePedagogiqueController,
        action: "update",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN],
        isLoginNeeded: true
    },
    {
        method: "delete",
        route: "/fiche-pedagogique/:id",
        controller: FichePedagogiqueController,
        action: "remove",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN],
        isLoginNeeded: true
    }
];
