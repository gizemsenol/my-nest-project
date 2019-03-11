import { Controller, Post, Body, Get, Put, Delete,Param, UseGuards} from '@nestjs/common';
import { AuthorService } from './author.service';
import { Author } from './author.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('/api')

export class AuthorController {
    constructor(private readonly service: AuthorService) { }

    @Get('/author/:id')
    @UseGuards(AuthGuard('bearer'))
    get(@Param() params) {
        console.log(params.id)
        return this.service.getAuthors(params.id);
    }

    @Post('/author')
    @UseGuards(AuthGuard('bearer'))
    save(@Body() author) {
        
        return this.service.saveAuthor(author);
    }

    @Put('/author/:id')
    @UseGuards(AuthGuard('bearer'))
    update(@Body() author: Author) {
        console.log(author)
        return this.service.updateAuthor(author);
    }

    @Delete('/author/:id')
    @UseGuards(AuthGuard('bearer'))
    deleteAuthor(@Param() params) {
        return this.service.deleteAuthor(params.id);
    }

    
}