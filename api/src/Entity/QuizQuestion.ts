import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn, OneToMany} from "typeorm";

import {Image} from "./Image";
import {Quiz} from "./Quiz";
import {QuizReponse} from "./QuizReponse";

@Entity()
export class QuizQuestion {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    question: string;

    @Column()
    ordre: number;

    @OneToOne(() => Image, {cascade: true, nullable: true})
    @JoinColumn()
    image: Image;

    @ManyToOne(() => Quiz, quiz => quiz.id)
    quiz: Quiz;

    @OneToMany(() => QuizReponse, quizReponse => quizReponse.quizQuestion, { cascade: true })
    reponse: QuizReponse[];
}
