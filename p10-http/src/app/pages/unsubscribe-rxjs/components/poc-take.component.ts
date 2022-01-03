import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { take, tap } from 'rxjs/operators';

import { EnviarValorService } from '../enviar-valor.service';

@Component({
  selector: 'poc-take',
  template: `
    <poc-base [nome]="nome"
      [valor]="valor" estilo="bg-info">
    </poc-base>
  `
})
export class PocTakeComponent implements OnInit {

  nome = 'Componente com take';
  valor: string = '';

  constructor(private enviarValorService: EnviarValorService) {}

  ngOnInit(): void {
    this.enviarValorService.getValor()
      .pipe(
        tap(v => console.log(this.nome, v)),
        take(1)
      )
      .subscribe(novoValor => this.valor = novoValor);
  }

  ngOnDestroy() {
    console.log(`${this.nome} foi destruído.`);
  }
}
