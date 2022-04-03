import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { PraiasComponent } from './praias.component';
import { PraiasListComponent } from './praias-list/praias-list.component';
import { PraiasFormComponent } from './praias-form/praias-form.component';
import { PraiasDetalhesComponent } from './praias-detalhes/praias-detalhes.component';
import { PraiasRoutingModule } from './praias-routing.module';

const components = [
  PraiasComponent,
  PraiasListComponent,
  PraiasDetalhesComponent,
  PraiasFormComponent,
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    PraiasRoutingModule,
    MatProgressSpinnerModule,
  ],
})
export class PraiasModule { }
