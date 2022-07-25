import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, OneToMany} from 'typeorm';

import { User } from "./User";
import {CommandeLigne} from './CommandeLigne';
import { ArrayMinSize, IsDate, IsInt } from 'class-validator';

@Entity()
export class Commande {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsInt()
    numero: number;

    @Column()
    @IsDate()
    date: Date;

    @ManyToOne(type => User, user => user.id)
    @JoinTable({ name: "user" })
    user: User;

    @OneToMany(() => CommandeLigne, commandeLignes => commandeLignes.commande, { cascade: true, onDelete: 'CASCADE' })
    @ArrayMinSize(1)
    commandeLignes: CommandeLigne[];
}
