import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";

import {UserVisualNovel} from "./UserVisualNovel";
import {VisualNovelPage} from "./VisualNovelPage";
import {UserVisualNovelChoix} from "./UserVisualNovelChoix";

@Entity()
export class UserVisualNovelPage {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => VisualNovelPage, visualNovelPage => visualNovelPage.id)
    visualNovelPage: VisualNovelPage;

    @ManyToOne(() => UserVisualNovel, userVisualNovel => userVisualNovel.id)
    userVisualNovel: UserVisualNovel;

    @OneToMany(() => UserVisualNovelChoix, userVisualNovelChoix => userVisualNovelChoix.userVisualNovelPage, { cascade: true })
    userVisualNovelChoix: UserVisualNovelChoix[];

    @Column()
    fini: number;
}
