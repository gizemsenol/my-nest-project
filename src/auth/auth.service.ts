import { Injectable } from '@nestjs/common';
import { userService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: userService) {}

  async validateUser(token: string): Promise<any> {
    // Validate if token passed along with HTTP request
    // is associated with any registered account in the database
    return await this.usersService.findOneByToken(token);
  }
}