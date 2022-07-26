import { IsInt, IsString, MaxLength, Min, MinLength } from "class-validator";
import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, JoinTable} from "typeorm";

import {Image} from "./Image";
import {User} from "./User";
import {Ville} from "./Ville";

@Entity()
export class ParcoursEcolo {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, user => user.id)
    @JoinTable({ name: "user" })
    user: User;

    @OneToOne(() => Image, {cascade: true, nullable: true})
    @JoinColumn()
    image: Image;

    @ManyToOne(type => Ville, ville => ville.id)
    @JoinTable({ name: "ville" })
    ville: Ville;

    @Column()
    @IsString()
    @MinLength(5)
    @MaxLength(800)
    description: string;

    @Column()
    @IsInt()
    @Min(1)
    nbSac: number;
}
