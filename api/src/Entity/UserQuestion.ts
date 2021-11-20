import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";

import {UserReponse} from "./UserReponse";
import {UserQuiz} from "./UserQuiz";
import {QuizQuestion} from "./QuizQuestion";

@Entity()
export class UserQuestion {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => QuizQuestion, question => question.id)
    question: QuizQuestion;

    @ManyToOne(() => UserQuiz, quiz => quiz.id)
    userQuiz: UserQuiz;

    @OneToMany(() => UserReponse, userReponse => userReponse.userQuestion, { cascade: true })
    userReponse: UserReponse[];

    @Column()
    fini: number;
}
