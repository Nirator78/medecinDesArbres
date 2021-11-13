import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn, OneToMany} from "typeorm";
import {VisualNovel} from "./VisualNovel";
import {Image} from "./Image";
import {VisualNovelChoix} from "./VisualNovelChoix";

@Entity()
export class VisualNovelPage {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    ordre: number;

    @OneToOne(() => Image)
    @JoinColumn()
    image: Image;

    @ManyToOne(() => VisualNovel, visualNovel => visualNovel.id)
    visualNovel: VisualNovel;

    @OneToMany(() => VisualNovelChoix, visualNovelChoix => visualNovelChoix.visualNovelPage, { cascade: true })
    visualNovelChoix: VisualNovelChoix[];
}
