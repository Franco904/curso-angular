import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PraiasComponent } from './praias.component';
import { PraiasListComponent } from './praias-list/praias-list.component';
import { PraiasFormComponent } from './praias-form/praias-form.component';
import { PraiasDetalhesComponent } from './praias-detalhes/praias-detalhes.component';

const praiasRoutes: Routes = [
  { path: 'praias', component: PraiasComponent, children: [
      { path: 'list', component: PraiasListComponent },
      { path: 'new', component: PraiasFormComponent },
      { path: ':id/edit', component: PraiasFormComponent },
      { path: ':id/detalhes', component: PraiasDetalhesComponent },
      { path: '', redirectTo: "/praias/list", pathMatch: 'full' }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(praiasRoutes)],
  exports: [RouterModule]
})
export class PraiasRoutingModule { }
