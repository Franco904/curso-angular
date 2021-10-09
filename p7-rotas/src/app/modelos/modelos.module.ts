import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModelosComponent } from './modelos.component';
import { ModeloFormComponent } from './modelo-form/modelo-form.component';
import { ModeloDetalheComponent } from './modelo-detalhe/modelo-detalhe.component';
import { ModelosRoutingModule } from './modelos-routing.module';

@NgModule({
  declarations: [
    ModelosComponent,
    ModeloFormComponent,
    ModeloDetalheComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModelosRoutingModule
  ]
})
export class ModelosModule { }
