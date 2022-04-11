import { Component, OnInit, Input } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {

  @Input() type: string = 'danger';
  @Input() message: string = '';

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit(): void { }

  onClose() {
    this.bsModalRef.hide();
  }

}
