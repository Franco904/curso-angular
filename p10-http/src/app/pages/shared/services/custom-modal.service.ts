import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { Subject } from 'rxjs';

import { AlertModalComponent } from '../components/alert-modal/alert-modal.component';
import { ConfirmModalComponent } from '../components/confirm-modal/confirm-modal.component';
import { ProgressModalComponent } from '../components/progress-modal/progress-modal.component';
import { AlertTypes } from '../enums/alert_types';

@Injectable({
  providedIn: 'root'
})
export class CustomModalService {
  progressState = new Subject<number>();

  constructor(private modalService: BsModalService) { }

  private showAlert(type: string, message: string, dismissTimeOut?: number) {
    // Instancia componente em tempo de execução
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);

    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

    if (dismissTimeOut) setTimeout(() => bsModalRef.hide(), dismissTimeOut);
  }

  showDangerAlert(message: string) {
    this.showAlert(AlertTypes.DANGER, message);
  }

  showSuccessAlert(message: string) {
    this.showAlert(AlertTypes.SUCCESS, message, 3000);
  }

  showInfoAlert(message: string) {
    this.showAlert(AlertTypes.INFO, message);
  }

  showConfirm(title: string, message: string, disposeButtonText?: string, confirmButtonText?: string) {
    const bfModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent);

    bfModalRef.content.title = title;
    bfModalRef.content.message = message;
    if (disposeButtonText) bfModalRef.content.disposeButtonText = disposeButtonText;
    if (confirmButtonText) bfModalRef.content.confirmButtonText = confirmButtonText;

    return (<ConfirmModalComponent>bfModalRef.content).confirmResult.asObservable();
  }

  showProgress(title: string, message: string) {
    const bfModalRef: BsModalRef = this.modalService.show(ProgressModalComponent);

    bfModalRef.content.title = title;
    bfModalRef.content.message = message;
  }

  updateProgress(newProgress: number) {
    this.progressState.next(newProgress);
  }

  getProgress() {
    return this.progressState.asObservable();
  }

}
