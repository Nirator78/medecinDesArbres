import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import {Image} from "./Image";

@Entity()
export class Article {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    description: string;

    @Column()
    prix: number;

    @Column()
    stock: string;

    @OneToOne(() => Image)
    @JoinColumn()
    image: Image;

    @Column()
    tag: string;
}
