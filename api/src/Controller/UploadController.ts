import {NextFunction, Request, Response} from "express";

export class UploadController {

    async upload(request: Request, response: Response, next: NextFunction) {
        try {
            if(!request.files) {
                response.send({
                    status: 0
                });
            } else {
                let image = request.files.image;

                const {type, id} = request.params;

                // On enregistre le fichier au bon endroit
                image.mv(`./uploads/${type}/` + `${id}.png`);

                // Créer un objet Image pour le lié à son parent

                //send response
                response.send({
                    status: 1,
                    data: {
                        name: image.name,
                        mimetype: image.mimetype,
                        size: image.size
                    }
                });
            }
        } catch (err) {
            response.status(500).send(err);
        }
    }

}
