import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsNotEmpty, IsString, IsPhoneNumber, IsPostalCode, MinLength, IsEmpty, ValidateIf} from "class-validator";

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
    @MinLength(1)
    nom: string;

    @IsNotEmpty()
    @Column()
    @IsString()
    @MinLength(1)
    prenom: string;

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

    @ValidateIf(o => o.adresse !== undefined)
    @IsNotEmpty()
    @Column()
    @IsString()
    adresse: string;

    @ValidateIf(o => o.pays !== undefined)
    @IsNotEmpty()
    @Column()
    @IsString()
    pays: string;

    @ValidateIf(o => o.ville !== undefined)
    @IsNotEmpty()
    @Column()
    @IsString()
    ville: string;

    @ValidateIf(o => o.codePostal !== undefined)
    @IsNotEmpty()
    @Column()
    @IsString()
    @IsPostalCode('FR')
    codePostal: string;

    @ValidateIf(o => o.telephone !== undefined)
    @IsNotEmpty()
    @Column()
    @IsString()
    @IsPhoneNumber('FR')
    telephone: string;

    @IsNotEmpty()
    @Column()
    @IsEmail()
    email: string;
}
