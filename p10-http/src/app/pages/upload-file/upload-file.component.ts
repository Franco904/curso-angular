import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { CustomModalService } from '../shared/services/custom-modal.service';
import { UploadFileService } from './service/upload-file.service';

@Component({
  selector: 'upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit, OnDestroy {
  files?: Set<File>;
  unsub$ = new Subject();

  constructor(
    private uploadFileService: UploadFileService,
    private customModalService: CustomModalService,
  ) { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

  onChange(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    const filesSelected: FileList | null = element.files;

    if (filesSelected) {
      let i = 0;
      const filesNames = [];
      this.files = new Set();

      for (i; i < filesSelected.length; i++) {
        filesNames.push(filesSelected[i].name);
        this.files.add(filesSelected[i]);
      }
      document.getElementById('customFileLabel')!.innerHTML = filesNames.join(', ');
    }

  }

  onUploadFile() {
    if (this.files && this.files.size > 0) {
      this.customModalService.showProgress(
        'Aguarde',
        'Não feche a página até que o upload seja concluído.',
      );

      // "/api" para distinguir rotas comuns, de urls que vão para o back-end 
      this.uploadFileService.uploadFile(this.files, `${environment.BASE_URL}/upload`)
        .pipe(
          takeUntil(this.unsub$),
          // uploadProgress((progress) => this.customModalService.updateProgress(progress)),
          // filterResponse(),
        )
        .subscribe({
          next: (event: HttpEvent<Object>) => {
            switch (event.type) {
              case HttpEventType.UploadProgress:
                const progressDone = Math.round((event.loaded * 100) / event.total!);

                this.customModalService.updateProgress(progressDone);
                break;

              case HttpEventType.Response:
                this.customModalService.showSuccessAlert('Upload concluído com sucesso.');
                break;
            }
          }
        });
    }
  }

  onDownloadExcel() {
    this.uploadFileService.downloadFile(`${environment.BASE_URL}/downloadExcel`)
      .pipe(takeUntil(this.unsub$))
      .subscribe({
        next: (res: any) => {
          this.uploadFileService.handleFile(res, 'report.xlsx');
        },
      });
  }

  onDownloadPdf() {
    this.uploadFileService.downloadFile(`${environment.BASE_URL}/downloadPdf`)
      .pipe(takeUntil(this.unsub$))
      .subscribe({
        next: () => (res: any) => {
          this.uploadFileService.handleFile(res, 'report.pdf');
        },
      });
  }

}
