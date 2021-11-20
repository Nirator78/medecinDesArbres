/**
 * Created by Clement on 20/07/2021
 * Created At 09:46
 */
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn} from "typeorm";

import {FichePedagogique} from "./FichePedagogique";
import {Image} from "./Image";

@Entity()
export class SousPartieFichePedagogique {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titre: string;

    @Column()
    contenue: string;

    @OneToOne(() => Image, {cascade: true})
    @JoinColumn()
    image: Image;

    @ManyToOne(() => FichePedagogique, fichePedagogique => fichePedagogique.id)
    fichePedagogique: FichePedagogique;
}
