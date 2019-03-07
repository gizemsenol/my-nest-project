import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { AuthorsService } from './author.service';
import { Author } from './author.entity';

@Controller('authors')

export class AuthorsController {
    
    constructor(private readonly service: AuthorsService) { }

    @Get(':id')
    get(@Param() params) {
        console.log(params.id)
        return this.service.getAuthors(params.id);
    }

    @Post()
    save(@Body() author) {
        
        return this.service.saveAuthor(author);
    }

    @Put(':id')
    update(@Body() author: Author) {
        console.log(author)
        return this.service.updateAuthor(author);
    }

    @Delete(':id')
    deleteAuthor(@Param() params) {
        return this.service.deleteAuthor(params.id);
    }
}