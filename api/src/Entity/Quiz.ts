import { IsNumber, IsString, MaxLength, Min, MinLength } from "class-validator";
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
    @IsString()
    @MinLength(5)
    @MaxLength(50)
    titre: string;

    @Column()
    @IsString()
    @MinLength(5)
    @MaxLength(30)
    theme: string;

    @Column()
    @IsString()
    @MinLength(5)
    @MaxLength(800)
    description: string;

    @Column({
        type: "enum",
        enum: QuizDifficulte,
    })
    difficulte: QuizDifficulte;

    @Column()
    @IsNumber()
    @Min(3)
    age: number;

    @OneToOne(() => Image, {cascade: true, nullable: true})
    @JoinColumn()
    image: Image;

    @OneToMany(() => QuizQuestion, questions => questions.quiz, { cascade: true, onDelete: 'CASCADE' })
    questions: QuizQuestion[];
}
