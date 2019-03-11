import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOperator } from 'typeorm';
import { Author } from './author.entity';
var logger = require('src/config/winston')



@Injectable()
export class AuthorService {

    constructor(@InjectRepository(Author) private authorRepository: Repository<Author>) { }

    async getAuthors(author: Author){
        logger.info(author+'get')
        return this.authorRepository.find({
            where: [{ "id": author }]
        });
    }
    async updateAuthor(author: Author) {
        logger.info(author+'update.')
        this.authorRepository.save(author)
    }

    async deleteAuthor(author: Author) {
        logger.info(author+'delete..')
        this.authorRepository.delete(author);
    }

    async saveAuthor(author:Author) {
        try {
            this.authorRepository.save(author);
            logger.info(author+'create..');
        } catch( myErrorObject ) {
            //logger.error(myErrorObject);
            //error loglamak?
            alert( myErrorObject.message )
        }
    }
    


}