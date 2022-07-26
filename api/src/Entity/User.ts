import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsNotEmpty, IsString, IsPhoneNumber, IsPostalCode, MinLength} from "class-validator";

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
    @IsString()
    @MinLength(4)
    nom: string;

    @IsNotEmpty()
    @Column()
    @IsString()
    @MinLength(4)
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
    @IsString()    
    @MinLength(6)
    password: string;

    @IsNotEmpty()
    @Column({default: ""})
    @IsString()
    adresse: string;

    @IsNotEmpty()
    @Column({default: ""})
    @IsString()
    pays: string;

    @IsNotEmpty()
    @Column({default: ""})
    @IsString()
    ville: string;

    @IsNotEmpty()
    @Column({default: ""})
    @IsString()
    @IsPostalCode('FR')
    codePostal: string;

    @IsNotEmpty()
    @Column({default: ""})
    @IsString()
    @IsPhoneNumber('FR')
    telephone: string;

    @IsNotEmpty()
    @Column()
    @IsEmail()
    email: string;
}
