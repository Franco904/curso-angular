import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PaginaNaoEncontradaComponent } from './pages/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { UnsubscribePocComponent } from './pages/unsubscribe-rxjs/unsubscribe-poc/unsubscribe-poc.component';
import { UploadFileComponent } from './pages/upload-file/upload-file.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'praias',
    loadChildren: () => import('./pages/praias/praias.module').then(module => module.PraiasModule)
  },
  { path: 'rxjs-poc', component: UnsubscribePocComponent },
  { path: 'upload', component: UploadFileComponent },
  { path: '', redirectTo: "/upload", pathMatch: 'full' }, // Mudar para /home depois
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
