import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import {Author} from "../author/author.entity";
@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    name:string;

    @Column() 
    publishDate: Date;

    @ManyToOne(type => Author, author => author.books)
    author: Author;
}
