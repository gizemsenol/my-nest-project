import { Injectable, Param } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var logger = require('src/config/winston');

@Injectable()
export class userService {
    
    constructor(@InjectRepository(User) private userRepository : Repository<User>) { }

    async getUser(id: number) {
        logger.info('id:'+ id)
        return await this.userRepository.find({
            where : [{'_id': id }]
        });
    }

    async createUser(user: User) {
        logger.info(user+'create')
        let hash = bcrypt.hashSync(user.password,10);
        user.password = hash
        logger.info(hash)
        if (user.password == undefined){
            user.token = 'error'
            throw console.error();
        }
        else{
            var token = jwt.sign({ 
            password: user.password,
            user: user.id}, user.password);
        logger.info(token)
        console.log(token)
        user.token = token
        this.userRepository.save(user);
        return 'token:'+user.token
        }
    } 

    async deleteUser(user: User) {
        this.userRepository.delete(user.id);
    }

    async updateUser(user: User) {
        this.userRepository.save(user);
    }

    async findOneByToken(token){
        return await this.userRepository.find({
            where : [{'token': token }]
        });
    }
 }
