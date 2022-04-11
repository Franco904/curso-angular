import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CustomModalService } from '../../services/custom-modal.service';

@Component({
  selector: 'app-progress-modal',
  templateUrl: './progress-modal.component.html',
  styleUrls: ['./progress-modal.component.scss']
})
export class ProgressModalComponent implements OnInit, OnDestroy {
  @Input() title?: string;
  @Input() message?: string;
  @Input() progressValue: number = 0;

  unsub$ = new Subject();

  constructor(
    private bsModalRef: BsModalRef,
    private customModalService: CustomModalService,
  ) { }

  ngOnInit(): void {
    this.customModalService.getProgress()
      .pipe(takeUntil(this.unsub$))
      .subscribe({
        next: (value) => {
          this.progressValue = value;
          if (value == 100) this.bsModalRef.hide();
        },
      });
  }

  ngOnDestroy() {
    this.unsub$.next();
    this.unsub$.complete();
  }

}
