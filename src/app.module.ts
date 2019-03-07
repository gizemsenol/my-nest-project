import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/book.module';
import { AuthorsModule } from './author/author.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [TypeOrmModule.forRoot(), BooksModule, AuthorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}