import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, OneToMany} from 'typeorm';

import { User } from "./User";
import {CommandeLigne} from './CommandeLigne';
import { ArrayMinSize, IsDate, IsDateString, IsInt, IsISO8601, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

@Entity()
export class Commande {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNumber()
    numero: number;

    @Column()
    date: Date;

    @ManyToOne(type => User, user => user.id)
    @JoinTable({ name: "user" })
    user: User;

    @OneToMany(() => CommandeLigne, commandeLignes => commandeLignes.commande, { cascade: true, onDelete: 'CASCADE' })
    @ArrayMinSize(1)
    commandeLignes: CommandeLigne[];
}
