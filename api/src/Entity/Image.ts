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
        // supprimmé le fichier lié à l'entité à faire
    }

}
