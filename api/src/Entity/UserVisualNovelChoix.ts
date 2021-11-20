import {Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";

import {UserVisualNovelPage} from "./UserVisualNovelPage";
import {VisualNovelChoix} from "./VisualNovelChoix";

@Entity()
export class UserVisualNovelChoix {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => UserVisualNovelPage, userVisualNovelPage => userVisualNovelPage.id)
    userVisualNovelPage: UserVisualNovelPage;

    @ManyToOne(() => VisualNovelChoix, visualNovelChoix => visualNovelChoix.id)
    visualNovelChoix: VisualNovelChoix;
}