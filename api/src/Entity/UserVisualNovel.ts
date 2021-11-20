import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinTable} from "typeorm";

import {User} from "./User";
import {VisualNovel} from "./VisualNovel";
import {UserVisualNovelPage} from "./UserVisualNovelPage";

@Entity()
export class UserVisualNovel {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, user => user.id)
    @JoinTable({ name: "user" })
    user: User;

    @ManyToOne(() => VisualNovel, quiz => quiz.id)
    visualNovel: VisualNovel;

    @OneToMany(() => UserVisualNovelPage, userVisualNovelPage => userVisualNovelPage.userVisualNovel, { cascade: true })
    userVisualNovelPages: UserVisualNovelPage[];

    @Column()
    fini: number;
}
