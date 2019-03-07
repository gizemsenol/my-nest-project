import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BooksService {

    constructor(@InjectRepository(Book) private booksRepository: Repository<Book>) { }

    async getBooks(): Promise<Book[]> {
        const book = Book[0];
        console.log(book)
        return await this.booksRepository.find();
    }

    async getBook(_id: number): Promise<Book[]> {
        return await this.booksRepository.find({
            where: [{ "id": _id }]
        });
    }

    async updateBook(book: Book) {
        this.booksRepository.save(book)
    }

    async deleteBook(book: Book) {
        console.log(this)
        this.booksRepository.delete(book);
    }
    async createBook(book:Book) {
        this.booksRepository.save(book);
        //authorId nasıl kaydolur?
    }
}