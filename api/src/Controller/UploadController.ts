import {NextFunction, Request, Response} from "express";

export class UploadController {

    async upload(request: Request, response: Response, next: NextFunction) {
        try {
            if(!request.files) {
                response.send({
                    status: false,
                    message: 'No file uploaded'
                });
            } else {
                //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
                let avatar = request.files.avatar;

                const {type, id} = request.params;
                const extension = avatar.name.split('.')[1];

                //Use the mv() method to place the file in upload directory (i.e. "uploads")
                avatar.mv(`./uploads/${type}/` + `${id}.${extension}`);

                //send responseponse
                response.send({
                    status: true,
                    message: 'File is uploaded',
                    data: {
                        name: avatar.name,
                        mimetype: avatar.mimetype,
                        size: avatar.size
                    }
                });
            }
        } catch (err) {
            response.status(500).send(err);
        }
    }

}
