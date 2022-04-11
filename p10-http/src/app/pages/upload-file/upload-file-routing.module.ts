import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UploadFileComponent } from './upload-file.component';

const uploadFileRoutes: Routes = [
  { path: '', component: UploadFileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(uploadFileRoutes)],
  exports: [RouterModule]
})
export class UploadFileRoutingModule { }
