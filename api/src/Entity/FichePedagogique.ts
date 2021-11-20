/**
 * Created by Clement on 20/07/2021
 * Created At 09:45
 */
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'

import {SousPartieFichePedagogique} from "./SousPartieFichePedagogique";

@Entity()
export class FichePedagogique {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titre: string;

    @Column()
    theme: string;

    @OneToMany(() => SousPartieFichePedagogique, sousPartieFichePedagogiques => sousPartieFichePedagogiques.fichePedagogique, { cascade: true })
    sousPartieFichePedagogiques: SousPartieFichePedagogique[];
}
