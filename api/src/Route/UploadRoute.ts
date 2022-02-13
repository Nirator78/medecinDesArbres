import { UploadController } from "../Controller/UploadController";

export default [
    {
        method: "post",
        route: "/upload/:type/:id",
        controller: UploadController,
        action: "upload"
    }
];
