import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";

import {VisualNovelPage} from "./VisualNovelPage";

@Entity()
export class VisualNovel {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titre: string;

    @Column()
    theme: string;

    @OneToMany(() => VisualNovelPage, visualNovelPages => visualNovelPages.visualNovel, { cascade: true })
    visualNovelPages: VisualNovelPage[];
}
