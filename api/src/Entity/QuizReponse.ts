import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";

import {QuizQuestion} from "./QuizQuestion";

@Entity()
export class QuizReponse {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    reponse: string;

    @Column()
    bonne: boolean;

    @ManyToOne(() => QuizQuestion, quizQuestion => quizQuestion.id)
    quizQuestion: QuizQuestion;
}