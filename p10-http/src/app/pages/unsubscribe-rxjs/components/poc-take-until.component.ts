import { Component, OnInit } from '@angular/core';

import { takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { EnviarValorService } from '../enviar-valor.service';

@Component({
  selector: 'poc-take-until',
  template: `
    <poc-base [nome]="nome"
      [valor]="valor" estilo="bg-primary">
    </poc-base>
  `
})
export class PocTakeUntilComponent implements OnInit {

  nome = 'Componente com takeUntil';
  valor: string = '';

  unsub$ = new Subject();

  constructor(private enviarValorService: EnviarValorService) {}

  ngOnInit(): void {
    this.enviarValorService.getValor()
      .pipe(
        tap(v => console.log(this.nome, v)),
        takeUntil(this.unsub$)
      )
      .subscribe(novoValor => this.valor = novoValor);
  }

  ngOnDestroy() {
    this.unsub$.next(); // Emite
    this.unsub$.complete(); // Finaliza para prevenir memory leak

    console.log(`${this.nome} foi destruído.`);
  }
}
