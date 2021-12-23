import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateFormComponent } from './template-form/template-form.component';
import { DataFormComponent } from './data-form/data-form.component';
import { FormularioSubmetidoComponent } from './shared/components/formulario-submetido/formulario-submetido.component';

const routes: Routes = [
  { path: 'templateForm', component: TemplateFormComponent },
  { path: 'dataForm', component: DataFormComponent },
  { path: 'submetido', component: FormularioSubmetidoComponent },
  { path: '', pathMatch: 'full', redirectTo: 'dataForm' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
