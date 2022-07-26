/**
 * Created by Clement on 20/07/2021
 * Created At 09:45
 */
import { IsString, MaxLength, MinLength } from 'class-validator';
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'

import {SousPartieFichePedagogique} from "./SousPartieFichePedagogique";

@Entity()
export class FichePedagogique {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    @MinLength(5)
    @MaxLength(100)
    titre: string;

    @Column()
    @IsString()
    @MinLength(5)
    @MaxLength(30)
    theme: string;

    @OneToMany(() => SousPartieFichePedagogique, sousPartieFichePedagogiques => sousPartieFichePedagogiques.fichePedagogique, { cascade: true })
    sousPartieFichePedagogiques: SousPartieFichePedagogique[];
}
