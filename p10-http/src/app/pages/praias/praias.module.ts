import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { PraiasDetalhesComponent } from './praias-detalhes/praias-detalhes.component';
import { PraiasFormComponent } from './praias-form/praias-form.component';
import { PraiasListComponent } from './praias-list/praias-list.component';
import { PraiasRoutingModule } from './praias-routing.module';
import { PraiasComponent } from './praias.component';

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
    MatChipsModule,
    MatProgressSpinnerModule,
  ],
})
export class PraiasModule { }
