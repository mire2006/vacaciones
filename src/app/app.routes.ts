import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./paginas/home/home.page').then( m => m.HomePage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'valor-vuelo',
    loadComponent: () => import('./paginas/valor-vuelo/valor-vuelo.page').then( m => m.ValorVueloPage)
  },
];
