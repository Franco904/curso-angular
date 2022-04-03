import { Component, Input, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  @Input() title?: string;
  @Input() message?: string;
  @Input() disposeButtonText: string = 'Cancelar';
  @Input() confirmButtonText: string = 'Entendi';

  confirmResult = new Subject<boolean>();

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  onConfirm() {
    this.resolveAndClose(true);
  }

  onClose() {
    this.resolveAndClose(false);
  }

  private resolveAndClose(value: boolean) {
    this.confirmResult.next(value);
    this.bsModalRef.hide();
  }

}
