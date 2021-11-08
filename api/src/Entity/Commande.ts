/**
 * Created by Clement on 20/07/2021
 * Created At 09:45
 */
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, ManyToMany, OneToMany} from 'typeorm';
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
