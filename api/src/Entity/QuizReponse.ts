import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn} from "typeorm";

import {Image} from "./Image";
import {QuizQuestion} from "./QuizQuestion";

@Entity()
export class QuizReponse {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    reponse: string;

    @Column()
    ordre: number;

    @Column()
    bonne: number;

    @OneToOne(() => Image, {cascade: true, nullable: true})
    @JoinColumn()
    image: Image;

    @ManyToOne(() => QuizQuestion, quizQuestion => quizQuestion.id)
    quizQuestion: QuizQuestion;
}