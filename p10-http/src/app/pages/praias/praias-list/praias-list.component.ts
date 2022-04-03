import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of, pipe, Subject } from 'rxjs';
import { catchError, take } from 'rxjs/operators';

import { Praia } from '../model/praia';
import { PraiasService } from '../services/praias.service';
import { AlertModalService } from '../../shared/services/alert-modal.service';

@Component({
  selector: 'praias-list',
  templateUrl: './praias-list.component.html',
  styleUrls: ['./praias-list.component.scss'],
  preserveWhitespaces: true
})
export class PraiasListComponent implements OnInit {
  praias$?: Observable<Praia[]>;
  error$?: Subject<boolean>;

  constructor(
    private praiasService: PraiasService,
    private alertModalService: AlertModalService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh() {
    this.praias$ = this.praiasService.loadPraias()
    pipe(
      catchError(error => {
        // this.error$?.next(true);
        this.handleError();

        return of({});
      })
    );

    // Com método subscribe utilizando chave e valor
    this.praiasService.loadPraias()
    .pipe(take(1))
    .subscribe({
      next: (praias) => praias,
      error: (error) => error,
      complete: () => 'Subscribe completo',
    })
  }

  handleError() {
    this.alertModalService.showDangerAlert('Erro ao carregar praias cadastradas. Tente novamente mais tarde.');
  }

  goToPraiasForm() {
    this.router.navigate(['/praias/new']);
    this.praiasService.changeNavigationBar();
  }

  onEdit(idPraia?: number) {
    if (idPraia) this.router.navigate(['/praias/edit', idPraia]);
    this.praiasService.changeNavigationBar();
  }

}
