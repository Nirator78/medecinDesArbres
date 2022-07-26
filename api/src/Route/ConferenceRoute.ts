import { ConferenceController } from "../Controller/ConferenceController";
import { UserRole } from "../Entity/User";

export default [
    {
        method: "get",
        route: "/conferences",
        controller: ConferenceController,
        action: "all",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER]
    }, 
    {
        method: "get",
        route: "/conference/:id",
        controller: ConferenceController,
        action: "one",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER]
    }, 
    {
        method: "post",
        route: "/conference",
        controller: ConferenceController,
        action: "save",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN]
    },
    {
        method: "put",
        route: "/conference/:id",
        controller: ConferenceController,
        action: "update",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN]
    },
    {
        method: "delete",
        route: "/conference/:id",
        controller: ConferenceController,
        action: "remove",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN]
    },
    {
        method: "post",
        route: "/conference/:conferenceId/user/:userId",
        controller: ConferenceController,
        action: "addUserToConference",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER]
    }
];
