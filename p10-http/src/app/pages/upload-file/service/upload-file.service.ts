import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private httpClient: HttpClient) { }

  uploadFile(files: Set<File>, url: string) {
    const formData = new FormData();
    files.forEach((file) => formData.append('file', file, file.name));

    // Comunicação com o server side
    return this.httpClient.post(url, formData, {
      observe: 'events',
      reportProgress: true,
    });
  }

  downloadFile(url: string) {
    return this.httpClient.get(url, {
      responseType: 'blob' as 'json', // padrão é JSON
    });
  }

  handleFile(res: any, fileName: string) {
    const file = new Blob([res], {
      type: res.type,
    });

    // Gambiarra para fazer o download sem o usuário precisar clicar de fato
    const blob = window.URL.createObjectURL(file);
    const link = document.createElement('a');

    // Click
    link.href = blob;
    link.download = fileName;
    link.click();

    // Remove o arquivo de download depois de clicar
    window.URL.revokeObjectURL(blob);
    link.remove();
  }
}
