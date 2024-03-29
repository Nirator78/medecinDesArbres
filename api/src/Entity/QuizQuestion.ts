import { IsString, MaxLength, Min, MinLength } from "class-validator";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn, OneToMany} from "typeorm";

import {Image} from "./Image";
import {Quiz} from "./Quiz";
import {QuizReponse} from "./QuizReponse";

@Entity()
export class QuizQuestion {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    @MinLength(5)
    @MaxLength(800)
    question: string;

    @OneToOne(() => Image, {cascade: true, nullable: true})
    @JoinColumn()
    image: Image;

    @ManyToOne(() => Quiz, quiz => quiz.id, { onDelete: 'CASCADE' })
    quiz: Quiz;

    @OneToMany(() => QuizReponse, quizReponse => quizReponse.quizQuestion, { cascade: true, onDelete: 'CASCADE' })
    reponse: QuizReponse[];
}
