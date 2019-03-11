import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './books/book.module';
import { AuthorModule } from './author/author.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UserModule} from './user/user.module';
import { AuthModule } from './auth/auth.module';
var logger = require('src/config/winston')
logger.log('info','import modules, controllers and providers')

@Module({
  imports: [TypeOrmModule.forRoot(), BookModule, AuthorModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],

})  

export class AppModule {}
