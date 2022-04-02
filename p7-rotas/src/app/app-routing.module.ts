import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent,
      canActivate: [AuthGuard] 
  },
  { path: 'login', component: LoginComponent },
  { path: 'marcas', 
      canActivate: [AuthGuard], // Esta rota só poderá ser acessada por usuários autenticados
      canLoad: [AuthGuard],
      loadChildren: () => import('./marcas/marcas.module').then(
    module => module.MarcasModule) 
  },
  { path: 'modelos', 
      canActivate: [AuthGuard],
      canLoad: [AuthGuard],
      loadChildren: () => import('./modelos/modelos.module').then(
    module => module.ModelosModule) 
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PaginaNaoEncontradaComponent } // Deixar por último
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule] // Permite a utilização de diretivas de rotas (routerLink, routerLinkActive, ...)
})
export class AppRoutingModule { }
