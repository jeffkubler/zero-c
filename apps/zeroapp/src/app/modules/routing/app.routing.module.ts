import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { HomeComponent } from '../../home/home.component';
import { LoginComponent } from '../login/login.component';


const routes: Routes = [
  {
    path: 'heroes',
    loadChildren: () => import('../heroes/heroes.module').then(m => m.HeroesModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {animation: "Login"}
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {animation: "Home"},
    canActivate: [AuthGuard]
  },

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
