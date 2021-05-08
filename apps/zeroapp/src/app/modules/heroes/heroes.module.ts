import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [
  {
    path: '',
    component: HeroComponent
  }
];

@NgModule({
  declarations: [
    HeroComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    RouterModule.forChild(routes),
  ]
})
export class HeroesModule { }
