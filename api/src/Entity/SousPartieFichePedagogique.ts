/**
 * Created by Clement on 20/07/2021
 * Created At 09:46
 */
import { IsString, MaxLength, MinLength } from "class-validator";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn} from "typeorm";

import {FichePedagogique} from "./FichePedagogique";
import {Image} from "./Image";

@Entity()
export class SousPartieFichePedagogique {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    @MinLength(5)
    @MaxLength(100)
    titre: string;

    @Column({ type: "text" })
    @IsString()
    @MinLength(5)
    @MaxLength(5000)
    contenue: string;

    @ManyToOne(() => FichePedagogique, fichePedagogique => fichePedagogique.id)
    fichePedagogique: FichePedagogique;
}
