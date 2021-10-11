/**
 * Created by Clement on 20/07/2021
 * Created At 11:29
 */
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from 'typeorm';

@Entity()
export class PasswordKey {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    key: string;

    @Column()
    email: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt: Date;
}
