import { Component, OnDestroy, OnInit } from '@angular/core';

import { tap } from 'rxjs/operators';

import { EnviarValorService } from '../enviar-valor.service';

@Component({
  selector: 'poc',
  template: `
    <poc-base [nome]="nome"
      [valor]="valor" estilo="bg-danger">
    </poc-base>
  `
})
export class PocComponent implements OnInit, OnDestroy {

  nome = 'Componente sem unsubscribe';
  valor: string = '';

  constructor(private enviarValorService: EnviarValorService) { }

  ngOnInit(): void {
    this.enviarValorService.getValor()
      .pipe(tap(v => console.log(this.nome, v)))
      .subscribe(novoValor => this.valor = novoValor);
  }

  ngOnDestroy() {
    console.log(`${this.nome} foi destruído.`);
  }
}
