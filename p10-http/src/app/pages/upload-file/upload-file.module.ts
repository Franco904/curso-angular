import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UploadFileRoutingModule } from './upload-file-routing.module';
import { UploadFileComponent } from './upload-file.component';

@NgModule({
  declarations: [UploadFileComponent],
  exports: [UploadFileComponent],
  imports: [
    CommonModule,
    UploadFileRoutingModule,
  ]
})
export class UploadFileModule { }
