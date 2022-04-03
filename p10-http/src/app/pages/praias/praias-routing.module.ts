import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PraiasResolverGuard } from './guards/praias-resolver.guard';
import { PraiasDetalhesComponent } from './praias-detalhes/praias-detalhes.component';
import { PraiasFormComponent } from './praias-form/praias-form.component';
import { PraiasListComponent } from './praias-list/praias-list.component';
import { PraiasComponent } from './praias.component';

const praiasRoutes: Routes = [
  {
    path: 'praias', component: PraiasComponent, children: [
      { path: 'list', component: PraiasListComponent },
      { path: 'new', component: PraiasFormComponent },
      { path: 'edit/:id', component: PraiasFormComponent, resolve: { praia: PraiasResolverGuard } },
      { path: 'detalhes/:id', component: PraiasDetalhesComponent },
      { path: '', redirectTo: "/praias/list", pathMatch: 'full' }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(praiasRoutes)],
  exports: [RouterModule]
})
export class PraiasRoutingModule { }
