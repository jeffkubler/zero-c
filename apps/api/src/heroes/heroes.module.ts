import { Module } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { HeroesController } from './heroes.controller';
import { AppService } from '../app/app.service';

@Module({
  providers: [HeroesService, AppService],
  controllers: [HeroesController]
})
export class HeroesModule {}
