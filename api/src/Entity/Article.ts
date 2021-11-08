import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable} from "typeorm";

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

    @Column()
    image: number;

    @Column()
    tag: string;
}
