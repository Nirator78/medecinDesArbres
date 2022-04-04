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
    @Column({default: ""})
    adresse: string;

    @IsNotEmpty()
    @Column({default: ""})
    pays: string;

    @IsNotEmpty()
    @Column({default: ""})
    ville: string;

    @IsNotEmpty()
    @Column({default: ""})
    codePostal: string;

    @IsNotEmpty()
    @Column({default: ""})
    telephone: string;

    @IsNotEmpty()
    @Column()
    email: string;
}
