import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Image {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idObject: number;

    @Column()
    typeObject: string;

    @Column()
    url: string;

}
