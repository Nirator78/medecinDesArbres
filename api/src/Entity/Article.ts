import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import {IsDecimal, IsInt, IsNumber, IsString, Length, Min} from "class-validator";
import {Image} from "./Image";

@Entity()
export class Article {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(4, 40)
    nom: string;

    @Column()
    @Length(0, 500)
    description: string;

    @Column("decimal", { precision: 12, scale: 2, nullable: false })
    @IsNumber()
    @Min(0)
    prix: number;

    @Column()
    @IsInt()
    @Min(0)
    stock: number;

    @OneToOne(() => Image, {cascade: true, nullable: true})
    @JoinColumn()
    image: Image;

    @Column()
    @IsString()
    @Length(3, 30)
    tag: string;
}
