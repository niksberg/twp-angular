import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import {ServicePageComponent} from './pages/service/service.component';
export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'service', component: ServicePageComponent},
  { path: '**', redirectTo: '' }
];
