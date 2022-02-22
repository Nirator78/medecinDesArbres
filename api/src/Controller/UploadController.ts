import {NextFunction, Request, Response} from "express";
import {getRepository} from "typeorm";
import {Image} from "../Entity/Image";
import {Article} from "../Entity/Article";
import {ParcoursEcolo} from "../Entity/ParcoursEcolo";

export class UploadController {

    private imageRepository = getRepository(Image);
    private articleRepository = getRepository(Article);
    private parcoursEcoloRepository = getRepository(ParcoursEcolo);

    async upload(request: Request, response: Response, next: NextFunction) {
        try {
            if(!request.files) {
                return { status: 0 };
            } else {
                let image = request.files.image;

                const {type, id} = request.params;

                const imageExist = await this.imageRepository.findOne({ url: `/${type}/${id}.png`});

                if(!imageExist) {
                    // On créer une entité Image qu'on fait persisté dans la bdd
                    const newImage = new Image();
                    newImage.url = `/${type}/${id}.png`;
                    await this.imageRepository.save(newImage);

                    // Ensuite on met à jour l'entité qui doit avoir l'image
                    switch (type) {
                        case "article":
                            const article = await this.articleRepository.findOne(id);
                            article.image = newImage
                            await this.articleRepository.save(article);
                            break;
                        case "parcours-ecolo":
                            const parcoursEcolo = await this.parcoursEcoloRepository.findOne(id);
                            parcoursEcolo.image = newImage
                            await this.parcoursEcoloRepository.save(parcoursEcolo);
                            break;
                    }
                }

                // On enregistre le fichier au bon endroit
                image.mv(`./uploads/${type}/` + `${id}.png`);

                //on renvoie la réponse
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
