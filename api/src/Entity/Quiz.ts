import {Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn} from "typeorm";

import {Image} from "./Image";
import {QuizQuestion} from "./QuizQuestion";

@Entity()
export class Quiz {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titre: string;

    @Column()
    theme: string;

    @Column()
    description: string;

    @Column()
    difficulte: string;

    @Column()
    age: number;

    @OneToOne(() => Image, {cascade: true})
    @JoinColumn()
    image: Image;

    @OneToMany(() => QuizQuestion, questions => questions.quiz, { cascade: true })
    questions: QuizQuestion[];
}
