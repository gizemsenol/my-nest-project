import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
var logger = require('src/config/winston')



@Injectable()
export class BookService {

    constructor(@InjectRepository(Book) private bookRepository: Repository<Book>) { }

    async getBook(_id: number): Promise<Book[]> {
        logger.info('id:'+ _id)
        return await this.bookRepository.find({
            where: [{ "id": _id }]
        });
    }

    async updateBook(book: Book) {
        logger.info(book+'update')
        this.bookRepository.save(book)
    }

    async deleteBook(book: Book) {
        logger.info(book+'delete')
        this.bookRepository.delete(book);
    }
    async createBook(book:Book) {
        logger.info(book+'create')
        this.bookRepository.save(book);
        //authorId nasıl kaydolur?
    }

}