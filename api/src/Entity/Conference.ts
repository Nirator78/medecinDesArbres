/**
 * Created by Clement on 20/07/2021
 * Created At 09:45
 */
import { IsISO8601, IsString, MaxLength, MinLength } from 'class-validator';
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'

import {ConferenceParticipant} from "./ConferenceParticipant";

@Entity()
export class Conference {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    @MinLength(3)
    @MaxLength(100)
    titre: string;

    @Column()
    @IsString()
    @MinLength(3)
    @MaxLength(100)
    theme: string;

    @Column()
    @IsString()
    @MinLength(5)
    @MaxLength(800)
    description: string;

    @Column()
    @IsISO8601()
    dateDebut: Date;

    @Column()
    @IsISO8601()
    dateFin: Date;

    @OneToMany(() => ConferenceParticipant, conferenceParticipants => conferenceParticipants.conference, { cascade: true })
    conferenceParticipants: ConferenceParticipant[];
}
