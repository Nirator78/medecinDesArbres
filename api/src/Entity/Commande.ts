import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, OneToMany} from 'typeorm';

import { User } from "./User";
import {CommandeLigne} from './CommandeLigne';
import { ArrayMinSize, IsDate, IsDateString, IsInt, IsString, MaxLength, MinLength } from 'class-validator';

@Entity()
export class Commande {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    @MinLength(4)
    @MaxLength(25)
    numero: number;

    @Column()
    @IsDateString()
    date: Date;

    @ManyToOne(type => User, user => user.id)
    @JoinTable({ name: "user" })
    user: User;

    @OneToMany(() => CommandeLigne, commandeLignes => commandeLignes.commande, { cascade: true, onDelete: 'CASCADE' })
    @ArrayMinSize(1)
    commandeLignes: CommandeLigne[];
}
