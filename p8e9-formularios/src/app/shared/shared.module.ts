import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FormDebugComponent } from './components/form-debug/form-debug.component';
import { ErrorMsgComponent } from './components/error-msg/error-msg.component';
import { CampoErroComponent } from './components/campo-erro/campo-erro.component';
import { CampoLegendaComponent } from './components/campo-legenda/campo-legenda.component';
import { FormularioSubmetidoComponent } from './components/formulario-submetido/formulario-submetido.component';
import { InputFieldComponent } from './components/input-field/input-field.component';

@NgModule({
  declarations: [
    FormDebugComponent,
    ErrorMsgComponent,
    CampoErroComponent,
    CampoLegendaComponent,
    FormularioSubmetidoComponent,
    InputFieldComponent
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
    InputFieldComponent
  ]
})
export class SharedModule { }
