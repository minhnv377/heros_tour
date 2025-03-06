import { HeroesDetailComponent } from './../components/heroes/heroes-detail/heroes-detail.component';
import { Routes } from '@angular/router';
import { IntroComponent } from '../components/intro/intro.component';
import { HeroesComponent } from '../components/heroes/heroes/heroes.component';
import { DashboardComponent } from '../components/heroes/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent },
  {
    path: 'heroes',
    component: HeroesComponent,
    // children: [
    //   {
    //     path: 'detail/:id',
    //     component: HeroesDetailComponent,
    //   },
    // ],
  },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'detail/:id',
    component: HeroesDetailComponent,
  },
];
