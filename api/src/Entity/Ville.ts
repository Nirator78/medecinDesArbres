import { IsPostalCode, IsString } from "class-validator";
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Ville {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    ville: string;

    @Column()
    @IsString()
    @IsPostalCode()
    code_postal: string;

}
