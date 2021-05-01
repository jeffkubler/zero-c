import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AppService } from '../app/app.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { HeroesService } from './heroes.service';

const BORDER_COLOR = "red"

@Controller('heroes')
export class HeroesController {
    constructor(
        private heroesService: HeroesService, 
        private appService: AppService) {}

    @HttpCode(HttpStatus.ACCEPTED)
    @Get("test")
    public async myWorldFamousHeroesTest() {
        const HELLO_WORLD = this.appService.getHello();
        //const heroes = this.heroesService.getHeroes();
        //const heroes = await this.heroesService.connTest();
        const heroes = await this.heroesService.getHeroesForReal();
        const prettyPrintedHeroes = JSON.stringify(heroes, null, 2);

        const responseBody = `
            <p style="padding-bottom: 20px; border: 20px solid ${BORDER_COLOR}">${HELLO_WORLD}</p> 
            <pre>${prettyPrintedHeroes}</pre>  
            <p>${HELLO_WORLD}</p>`;
        return responseBody;
    }
    

    @Post('forReal')
    public async getForReal(@Body('id') id) {
        const result = await this.heroesService.getHeroesForReal(id);
        return result;
    }

    @UseGuards(JwtAuthGuard)
    @Post('all')
    public async getHeroes() {
        const result = await this.heroesService.getHeroes();
        return result;
    }
}
