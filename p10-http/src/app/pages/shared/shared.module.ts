import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlertModalComponent } from './components/alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { ProgressModalComponent } from './components/progress-modal/progress-modal.component';

const components = [
  AlertModalComponent,
  ConfirmModalComponent,
  ProgressModalComponent,
];

@NgModule({
  declarations: components,
  imports: [CommonModule],
  exports: components,
  entryComponents: components,
})
export class SharedModule { }
