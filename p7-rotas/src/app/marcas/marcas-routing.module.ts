import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MarcaDetalheComponent } from './marca-detalhe/marca-detalhe.component';
import { MarcaNaoEncontradaComponent } from './marca-nao-encontrada/marca-nao-encontrada.component';
import { MarcasComponent } from './marcas.component';

const marcasRoutes: Routes = [
  { path: '', component: MarcasComponent },
  { path: 'naoEncontrada', component: MarcaNaoEncontradaComponent },
  { path: ':id', component: MarcaDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forChild(marcasRoutes)], // Módulo de rotas de func. será provido no módulo filho.
  exports: [RouterModule]
})
export class MarcasRoutingModule { }
