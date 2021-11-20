import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, OneToMany} from 'typeorm';

import { User } from "./User";
import {CommandeLigne} from './CommandeLigne';

@Entity()
export class Commande {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    numero: number;

    @Column()
    date: Date;

    @ManyToOne(type => User, user => user.id)
    @JoinTable({ name: "user" })
    user: User;

    @OneToMany(() => CommandeLigne, commandeLignes => commandeLignes.commande, { cascade: true })
    commandeLignes: CommandeLigne[];
}
