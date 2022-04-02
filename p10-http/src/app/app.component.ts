import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { PraiasService } from './pages/praias/services/praias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'p10-http';

  showDefaultNavigationBar = true;
  unsub$ = new Subject();

  constructor(
    private praiasService: PraiasService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.praiasService.getMustChangeNavigationBar()
    .pipe(takeUntil(this.unsub$))
    .subscribe({
      next: (showDefaultNavigationBar) => {
        this.showDefaultNavigationBar = showDefaultNavigationBar;
      },
    });
  }

  ngOnDestroy() {
    this.unsub$.next();
    this.unsub$.complete();
  }

  goToPraiasList() {
    this.location.back();
    this.praiasService.changeNavigationBar();
  }

}
