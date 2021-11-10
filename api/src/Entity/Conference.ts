/**
 * Created by Clement on 20/07/2021
 * Created At 09:45
 */
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import {ConferenceParticipant} from "./ConferenceParticipant";

@Entity()
export class Conference {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titre: string;

    @Column()
    theme: string;

    @Column()
    description: string;

    @Column()
    dateDebut: Date;

    @Column()
    dateFin: Date;

    @OneToMany(() => ConferenceParticipant, conferenceParticipants => conferenceParticipants.conference, { cascade: true })
    conferenceParticipants: ConferenceParticipant[];
}
