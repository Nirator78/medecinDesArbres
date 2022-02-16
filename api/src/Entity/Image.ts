import {Entity, PrimaryGeneratedColumn, Column, BeforeRemove} from "typeorm";

@Entity()
export class Image {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    /**
     * Méthode appellée à la suppression de l'entité dans la base
     * Suppression du fichier attaché à l'entité
     */
    @BeforeRemove()
    deleteFile() {
        try {
            const fs = require('fs');
            const path = require('path');

            const jsonPath = path.join(__dirname, '..', '..', 'uploads', this.url);
            fs.unlinkSync(jsonPath)
        } catch(err) {
            console.error(err)
        }
    }

}
