import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MySqlOptions } from '../../config/dev.config';
import { NestMysql2Module } from 'mysql2-nestjs';
import { AuthModule } from '../auth/auth.module';
import { HeroesModule } from '../heroes/heroes.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    AuthModule,
    HeroesModule,
    NestMysql2Module.register(MySqlOptions),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
