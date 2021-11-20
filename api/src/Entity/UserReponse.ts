import {Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";

import {UserQuestion} from "./UserQuestion";
import {QuizReponse} from "./QuizReponse";

@Entity()
export class UserReponse {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => UserQuestion, userQuestion => userQuestion.id)
    userQuestion: UserQuestion;

    @ManyToOne(() => QuizReponse, quizReponse => quizReponse.id)
    reponse: QuizReponse;
}