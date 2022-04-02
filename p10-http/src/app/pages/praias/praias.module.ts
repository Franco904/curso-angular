import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PraiasComponent } from './praias.component';
import { PraiasListComponent } from './praias-list/praias-list.component';
import { PraiasFormComponent } from './praias-form/praias-form.component';
import { PraiasDetalhesComponent } from './praias-detalhes/praias-detalhes.component';
import { PraiasRoutingModule } from './praias-routing.module';

@NgModule({
  declarations: [
    PraiasComponent,
    PraiasListComponent,
    PraiasDetalhesComponent,
    PraiasFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    PraiasRoutingModule
  ],
  exports: [
    PraiasComponent,
    PraiasListComponent,
    PraiasDetalhesComponent,
    PraiasFormComponent
  ]
})
export class PraiasModule { }
