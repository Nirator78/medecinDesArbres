import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable} from "typeorm";

import { Article } from "./Article";
import {Commande} from './Commande';

@Entity()
export class CommandeLigne {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantite: number;

    @ManyToOne(type => Article, article => article.id)
    @JoinTable({ name: "article" })
    article: Article;

    @ManyToOne(() => Commande, commande => commande.id, { onDelete: 'CASCADE' })
    commande: Commande;
}
