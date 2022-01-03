import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PraiasComponent } from './praias.component';
import { PraiasDetalhesComponent } from './praias-detalhes/praias-detalhes.component';
import { PraiasFormComponent } from './praias-form/praias-form.component';

const praiasRoutes: Routes = [
  { path: 'praias', component: PraiasComponent, children: [
      { path: 'novo', component: PraiasFormComponent },
      { path: ':id', component: PraiasDetalhesComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(praiasRoutes)],
  exports: [RouterModule]
})
export class PraiasRoutingModule { }
