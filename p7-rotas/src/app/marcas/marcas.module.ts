import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarcasComponent } from './marcas.component';
import { MarcaDetalheComponent } from './marca-detalhe/marca-detalhe.component';
import { MarcaNaoEncontradaComponent } from './marca-nao-encontrada/marca-nao-encontrada.component';
import { MarcasRoutingModule } from './marcas-routing.module';

@NgModule({
  declarations: [
    MarcasComponent,
    MarcaDetalheComponent,
    MarcaNaoEncontradaComponent
  ],
  imports: [
    CommonModule,
    MarcasRoutingModule
  ],
  exports: [],
})
export class MarcasModule { }
