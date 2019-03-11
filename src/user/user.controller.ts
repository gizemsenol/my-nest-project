import { Controller, Post, Body, Get, Put, Delete,Param, UseGuards} from '@nestjs/common';
import { userService } from './user.service';
import { User } from './user.entity';

@Controller('/api')

export class LoginController {

    constructor(private readonly service: userService) { }
    
    @Get('/user/:id')
    get(@Param() params) {
        return this.service.getUser(params.id);
    }

    @Post('/user')
    create(@Body() user) {
        return this.service.createUser(user);
    }

    @Delete('/user/:id')
    deleteUser(@Param() user) {
        return this.service.deleteUser(user.id);
    }

    @Put('/user')
    update(@Body() user: User) {
        return this.service.updateUser(user);
    }

}