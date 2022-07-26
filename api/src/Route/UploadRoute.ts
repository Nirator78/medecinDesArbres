import { UploadController } from "../Controller/UploadController";
import { UserRole } from "../Entity/User";

export default [
    {
        method: "post",
        route: "/upload/:type/:id",
        controller: UploadController,
        action: "upload",
        allowedRoles: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.USER],
        isLoginNeeded: false
    }
];
