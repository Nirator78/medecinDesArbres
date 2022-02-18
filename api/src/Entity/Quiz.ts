import {Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn} from "typeorm";

import {Image} from "./Image";
import {QuizQuestion} from "./QuizQuestion";

export enum QuizDifficulte {
    FACILE = "facile",
    MOYEN = "moyen",
    DIFFICILE = "difficile",
}
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

    @Column({
        type: "enum",
        enum: QuizDifficulte,
    })
    difficulte: QuizDifficulte;

    @Column()
    age: number;

    @OneToOne(() => Image, {cascade: true, nullable: true})
    @JoinColumn()
    image: Image;

    @OneToMany(() => QuizQuestion, questions => questions.quiz, { cascade: true })
    questions: QuizQuestion[];
}
