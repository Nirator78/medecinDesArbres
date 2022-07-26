import { IsBoolean, IsString, MaxLength, MinLength } from "class-validator";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";

import {QuizQuestion} from "./QuizQuestion";

@Entity()
export class QuizReponse {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    @MinLength(5)
    @MaxLength(800)
    reponse: string;

    @Column()
    @IsBoolean()
    bonne: boolean;

    @ManyToOne(() => QuizQuestion, quizQuestion => quizQuestion.id, { onDelete: 'CASCADE' })
    quizQuestion: QuizQuestion;
}