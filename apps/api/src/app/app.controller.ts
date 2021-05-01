import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
//import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService
    ) {}
  
  @UseGuards(LocalAuthGuard)
  @Post('auth/login') //TODO: Add some kind of data, validation guard? Then could Type the request? Probably would have to assert, I dunno
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('test')
  otherGet(): string {
    return `...and ${this.getHello()} to you too!`;
  }
}
