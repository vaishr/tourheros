import { Component, OnInit, OnDestroy } from '@angular/core';
import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from './hero.service';


export const routes: RouterConfig = [
{
  path: 'heroes',
  component: HeroesComponent
},
{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'detail/:id',
  component: HeroDetailComponent
},
{
  path: '',
  redirectTo: '/dashboard',
  terminal: true
}
];

export const APP_ROUTER_PROVIDERS = [
provideRouter(routes)
];