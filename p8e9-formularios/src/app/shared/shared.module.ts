import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CampoErroComponent } from './components/campo-erro/campo-erro.component';
import { CampoLegendaComponent } from './components/campo-legenda/campo-legenda.component';
import { ErrorMsgComponent } from './components/error-msg/error-msg.component';
import { FormDebugComponent } from './components/form-debug/form-debug.component';
import { FormularioSubmetidoComponent } from './components/formulario-submetido/formulario-submetido.component';

@NgModule({
  declarations: [
    FormDebugComponent,
    ErrorMsgComponent,
    CampoErroComponent,
    CampoLegendaComponent,
    FormularioSubmetidoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    FormDebugComponent,
    ErrorMsgComponent,
    CampoErroComponent,
    CampoLegendaComponent,
    FormularioSubmetidoComponent,
  ]
})
export class SharedModule { }
