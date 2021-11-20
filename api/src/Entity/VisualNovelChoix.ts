import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, OneToMany, JoinColumn} from "typeorm";
import {VisualNovelPage} from "./VisualNovelPage";
import {Image} from "./Image";

@Entity()
export class VisualNovelChoix {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @OneToOne(() => Image)
    @JoinColumn()
    image: Image;

    @ManyToOne(() => VisualNovelPage, visualNovelPage => visualNovelPage.id)
    visualNovelPage: VisualNovelPage;

    @ManyToOne(() => VisualNovelPage, visualNovelPage => visualNovelPage.id)
    redirection: VisualNovelPage;

    // Manque la page de redirection
}