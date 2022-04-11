import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaNaoEncontradaComponent } from './pages/pagina-nao-encontrada/pagina-nao-encontrada.component';

const appRoutes: Routes = [
  { path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'praias',
    loadChildren: () => import('./pages/praias/praias.module').then(module => module.PraiasModule)
  },
  { 
    path: 'upload',
    loadChildren: () => import('./pages/upload-file/upload-file.module').then(module => module.UploadFileModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then(module => module.SearchModule)
  },
  { path: '', redirectTo: "/search", pathMatch: 'full' }, // Mudar para /home depois
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
