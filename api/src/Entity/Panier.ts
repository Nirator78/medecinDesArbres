/**
 * Created by Clement on 20/07/2021
 * Created At 09:26
 */
import {Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToOne} from 'typeorm';

import {Article} from './Article';
import {User} from './User';

@Entity()
export class Panier {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Article, article => article.id)
    @JoinTable()
    article: Article;

    @Column()
    quantite: string;

    @ManyToOne(type => User, user => user.id)
    @JoinTable({ name: "user" })
    user: User;
}
