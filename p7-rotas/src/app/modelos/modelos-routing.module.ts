import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModeloDetalheResolver } from '../guards/modelo-detalhe.resolver';
import { ModelosActivateChildGuard } from '../guards/modelos-activatechild.guard';
import { ModelosDeactivateGuard } from '../guards/modelos-deactivate.guard';
import { ModeloDetalheComponent } from './modelo-detalhe/modelo-detalhe.component';
import { ModeloFormComponent } from './modelo-form/modelo-form.component';
import { ModelosComponent } from './modelos.component';

const modelosRoutes: Routes = [
  {
    path: '', component: ModelosComponent,
    canActivateChild: [ModelosActivateChildGuard],        // Configurações de acesso as rotas filhas.
    children: [                                           // Definição de rotas filhas.
      { path: 'novo', component: ModeloFormComponent }, // Primeiro os caminhos hard-coded para evitar colisões de rotas.

      {
        path: ':id', component: ModeloDetalheComponent,
        resolve: { modelo: ModeloDetalheResolver }
      }, // Tentando carregar objeto Modelo antes de inicializar o componente correspondente.

      {
        path: ':id/editar', component: ModeloFormComponent,
        canDeactivate: [ModelosDeactivateGuard]
      }     // Configurações de desativação da rota (ModeloForm).
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(modelosRoutes)],
  exports: [RouterModule]
})
export class ModelosRoutingModule { }
