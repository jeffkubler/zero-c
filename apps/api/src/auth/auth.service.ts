/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserModel, LoginResp } from '@zeroc/api';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) { }

  async validateUser(username: string, pass: string): Promise<UserModel | null> {
    const userEntity = await this.usersService.findOne(username);

    if (userEntity && await bcrypt.compare(pass, userEntity.password)) {
      const { password, ...user } = userEntity;
      return user;
    }
    return null;
  }

  async login(user: UserModel): Promise<LoginResp> {
    const payload = { username: user.username, sub: user.id };
    const result = {
      ...user,
      token: this.jwtService.sign(payload),
    };

    return result;
  }
}