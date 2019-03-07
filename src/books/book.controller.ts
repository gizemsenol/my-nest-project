import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { BooksService } from './book.service';
import { Book } from './book.entity';
import { Repository } from 'typeorm';

@Controller('books')
export class BooksController {
    constructor(private readonly service: BooksService) {}
    @Get(':id')
    get(@Param() params) {
        return this.service.getBook(params.id);
    }
    
    @Get()
    list(@Param() params) {
        return this.service.getBooks();
    }

    @Post()
    create(@Body() book) {
        return this.service.createBook(book);
    }

    @Put()
    update(@Body() book: Book) {
        return this.service.updateBook(book);
    }

    @Delete(':id')
    deleteBook(@Param() params) {
        return this.service.deleteBook(params.id);
    }
}