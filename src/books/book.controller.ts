import { Controller, Post, Body, Get, Put, Delete, Param} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.entity';
import {AuthGuard} from '@nestjs/passport'
import {UseGuards} from '@nestjs/common'

@Controller('/api')
export class BookController {
    constructor(private readonly service: BookService) {}
    @Get('/book/:id')
    @UseGuards(AuthGuard('bearer'))
    get(@Param() params) {
        return this.service.getBook(params.id);
    }

    @Post('/book/')
    @UseGuards(AuthGuard('bearer'))
    create(@Body() book) {
        return this.service.createBook(book);
    }
    
    @Delete('/book/:id')
    @UseGuards(AuthGuard('bearer'))
    deleteBook(@Param() params) {
        return this.service.deleteBook(params.id);
    }    

    @Put('/book')
    @UseGuards(AuthGuard('bearer'))
    update(@Body() book: Book) {
        return this.service.updateBook(book);
    }


}