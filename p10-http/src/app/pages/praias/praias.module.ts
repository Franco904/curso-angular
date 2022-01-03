import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PraiasComponent } from './praias.component';
import { PraiasDetalhesComponent } from './praias-detalhes/praias-detalhes.component';
import { PraiasFormComponent } from './praias-form/praias-form.component';
import { PraiasRoutingModule } from './praias-routing.module';

@NgModule({
  declarations: [
    PraiasComponent,
    PraiasDetalhesComponent,
    PraiasFormComponent
  ],
  imports: [
    CommonModule,
    PraiasRoutingModule
  ],
  exports: [
    PraiasComponent,
    PraiasDetalhesComponent,
    PraiasFormComponent
  ]
})
export class PraiasModule { }
