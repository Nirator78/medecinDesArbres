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
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER]
    },
    {
        method: "get",
        route: "/ville/:id",
        controller: VilleController,
        action: "one",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER]
    },
    {
        method: "post",
        route: "/ville",
        controller: VilleController,
        action: "save",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN]
    },
    {
        method: "put",
        route: "/ville",
        controller: VilleController,
        action: "update",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN]
    },
    {
        method: "delete",
        route: "/ville/:id",
        controller: VilleController,
        action: "remove",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN]
    }
];
