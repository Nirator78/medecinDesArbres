import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinTable} from "typeorm";

import {Quiz} from "./Quiz";
import {UserQuestion} from "./UserQuestion";
import {User} from "./User";

@Entity()
export class UserQuiz {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, user => user.id)
    @JoinTable({ name: "user" })
    user: User;

    @ManyToOne(() => Quiz, quiz => quiz.id)
    quiz: Quiz;

    @OneToMany(() => UserQuestion, userQuestion => userQuestion.userQuiz, { cascade: true })
    userQuestion: UserQuestion[];

    @Column()
    fini: number;
}
