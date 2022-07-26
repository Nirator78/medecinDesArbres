/**
 * Created by Clement on 20/07/2021
 * Created At 09:29
 */
import { VilleController } from "../Controller/VilleController";
import { UserRole } from "../Entity/User";

export default [
    {
        method: "get",
        route: "/villes",
        controller: VilleController,
        action: "all",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER],
        isLoginNeeded: false
    },
    {
        method: "get",
        route: "/ville/:id",
        controller: VilleController,
        action: "one",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER],
        isLoginNeeded: false
    },
    {
        method: "post",
        route: "/ville",
        controller: VilleController,
        action: "save",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN],
        isLoginNeeded: true
    },
    {
        method: "put",
        route: "/ville",
        controller: VilleController,
        action: "update",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN],
        isLoginNeeded: true
    },
    {
        method: "delete",
        route: "/ville/:id",
        controller: VilleController,
        action: "remove",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN],
        isLoginNeeded: true
    }
];
