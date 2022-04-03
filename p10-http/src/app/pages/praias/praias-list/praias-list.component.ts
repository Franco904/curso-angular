import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EMPTY, Observable, pipe, Subject } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';

import { CustomModalService } from '../../shared/services/custom-modal.service';
import { Praia } from '../model/praia';
import { PraiasService } from '../services/praias.service';

@Component({
  selector: 'praias-list',
  templateUrl: './praias-list.component.html',
  styleUrls: ['./praias-list.component.scss'],
  preserveWhitespaces: true
})
export class PraiasListComponent implements OnInit {
  praiaSelected?: Praia;

  praias$?: Observable<Praia[]>;
  error$?: Subject<boolean>;

  constructor(
    private praiasService: PraiasService,
    private customModalService: CustomModalService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh() {
    this.praias$ = this.praiasService.loadPraias()
    pipe(
      catchError(_ => {
        // this.error$?.next(true);
        this.customModalService.showDangerAlert('Erro ao carregar praias cadastradas. Tente novamente mais tarde.');

        return EMPTY;
      })
    );
  }

  goToPraiasForm() {
    this.router.navigate(['/praias/new']);
    this.praiasService.changeNavigationBar();
  }

  onEdit(idPraia?: number) {
    if (idPraia) this.router.navigate(['/praias/edit', idPraia]);
    this.praiasService.changeNavigationBar();
  }

  onDelete(praia?: Praia) {
    const result$ = this.customModalService.showConfirm(
      'Deseja excluir a praia?',
      'Se confirmada a exclusão, não será possível recuperar a praia.',
      'Cancelar',
      'Excluir',
    );

    result$
      .pipe(
        take(1),
        switchMap((result) => result
          ? this.praiasService.deletePraia(praia?.id!)
          : EMPTY,
        ),
      )
      .subscribe({
        next: (praia) => {
          if (praia) this.customModalService.showSuccessAlert('Praia excluída com sucesso.');
        },
        error: () => this.customModalService.showDangerAlert('Erro ao excluir praia. Tente novamente mais tarde.'),
        complete: () => this.onRefresh(),
      });
  }

}
