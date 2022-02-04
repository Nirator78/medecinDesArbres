import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsNotEmpty} from "class-validator";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column()
    nom: string;

    @IsNotEmpty()
    @Column()
    prenom: string;

    @IsNotEmpty()
    @Column()
    role: string;

    @IsNotEmpty()
    @Column()
    password: string;

    @IsNotEmpty()
    @Column()
    adresse: string;

    @IsNotEmpty()
    @Column()
    pays: string;

    @IsNotEmpty()
    @Column()
    ville: string;

    @IsNotEmpty()
    @Column()
    code_postal: string;

    @IsNotEmpty()
    @Column()
    telephone: string;

    @IsNotEmpty()
    @Column()
    email: string;
}
