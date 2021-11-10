import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Ville {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ville: string;

    @Column()
    code_postal: string;

}
