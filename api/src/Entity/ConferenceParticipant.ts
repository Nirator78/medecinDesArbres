/**
 * Created by Clement on 20/07/2021
 * Created At 09:46
 */
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable} from "typeorm";

import {Conference} from "./Conference";
import { User } from "./User";

@Entity()
export class ConferenceParticipant {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titre: string;

    @ManyToOne(() => Conference, conference => conference.id)
    conference: Conference;

    @ManyToOne(type => User, user => user.id)
    @JoinTable({ name: "user" })
    user: User;
}
