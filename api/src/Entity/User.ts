import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsNotEmpty} from "class-validator";

export enum UserRole {
    SUPERADMIN = "super-admin",
    ADMIN = "admin",
    USER = "user",
}

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
    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.USER
    })
    role: UserRole;

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
    codePostal: string;

    @IsNotEmpty()
    @Column()
    telephone: string;

    @IsNotEmpty()
    @Column()
    email: string;
}
