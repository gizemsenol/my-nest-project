import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOperator } from 'typeorm';
import { Author } from './author.entity';

@Injectable()
export class AuthorsService {

    constructor(@InjectRepository(Author) private authorsRepository: Repository<Author>) { }

    async getAuthors(author: Author){
        return this.authorsRepository.find({
            where: [{ "id": author }]
        });
    }

    async updateAuthor(author: Author) {
        this.authorsRepository.save(author)
    }

    async deleteAuthor(author: Author) {
        this.authorsRepository.delete(author);
    }
    async createAuthor(author:Author) {
        console.log(author)
        this.authorsRepository.create(author);
    }
    async saveAuthor(author:Author) {
        try {
            this.authorsRepository.save(author);

        } catch( myErrorObject ) {
             alert( myErrorObject.message );
        }
    }
}