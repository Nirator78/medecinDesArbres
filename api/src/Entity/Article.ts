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

    @OneToOne(() => Image, {cascade: true, nullable: true})
    @JoinColumn()
    image: Image;

    @Column()
    tag: string;
}
