
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import {Book} from "../books/book.entity";
@Entity()
export class Author {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    sur_name: string;

    @OneToMany(type => Book, book => book.author)
    books: Book[];

}
