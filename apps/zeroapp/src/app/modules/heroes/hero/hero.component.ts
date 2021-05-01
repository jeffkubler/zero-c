import { Component, HostListener, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Hero } from '@zeroc/api';
import { HERO_ANIMATIONS } from './hero.animation';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: HERO_ANIMATIONS
})
export class HeroComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroesService
  ) { }

  ngOnInit(): void {
    this.loadHeroes();
  }

  async loadHeroes() {
    this.heroes = await this.heroService.getHeroes();    
  }

  @HostListener('document:keydown.alt.r') onAltR() {
    const [_, ...rest] = this.heroes;
    this.heroes = rest;
  }
}
