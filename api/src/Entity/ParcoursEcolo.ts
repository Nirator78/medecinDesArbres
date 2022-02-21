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
    description: string;
}
