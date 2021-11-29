import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    prenom: string;

    @Column()
    role: string;

    @Column()
    password: string;

    @Column()
    adresse: string;

    @Column()
    pays: string;

    @Column()
    ville: string;

    @Column()
    code_postal: string;

    @Column()
    telephone: string;

    @Column()
    email: string;
}
