import { Injectable } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { AlertModalComponent } from '../components/alert-modal/alert-modal.component';
import { ConfirmModalComponent } from '../components/confirm-modal/confirm-modal.component';
import { AlertTypes } from '../enums/alert_types';

@Injectable({
  providedIn: 'root'
})
export class CustomModalService {

  constructor(private modalService: BsModalService) { }

  private showAlert(type: string, message: string) {
    // Instancia componente em tempo de execução
    const bsModelRef: BsModalRef = this.modalService.show(AlertModalComponent);

    bsModelRef.content.type = type;
    bsModelRef.content.message = message;
  }

  showDangerAlert(message: string) {
    this.showAlert(AlertTypes.DANGER, message);
  }

  showSuccessAlert(message: string) {
    this.showAlert(AlertTypes.SUCCESS, message);
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

}
