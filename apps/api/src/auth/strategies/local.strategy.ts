import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserModel } from '@zeroc/api';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  /**
   * 
   * @param username 
   * @param password 
   * @returns Value that passport will use to build a `user` object, which then gets attached to the `Request` object 
   */
  async validate(username: string, password: string, _thing: string): Promise<UserModel> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}