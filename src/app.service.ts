import { Injectable, Logger } from '@nestjs/common';
var logger = require('src/config/winston')
logger.log('info','Appservice');

@Injectable()

export class AppService {
  getHello(): string {

    return 'Hello World!';
  }
}


