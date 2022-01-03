import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { EnviarValorService } from '../enviar-valor.service';

@Component({
  selector: 'poc-unsub',
  template: `
    <poc-base [nome]="nome"
      [valor]="valor" estilo="bg-secondary">
    </poc-base>
  `
})
export class PocUnsubComponent implements OnInit {

  nome = 'Componente com unsubscribe';
  valor: string = '';

  inscricoes?: Subscription[] = [];

  constructor(private enviarValorService: EnviarValorService) { }

  ngOnInit(): void {
    this.inscricoes?.push(
      this.enviarValorService.getValor()
      .pipe(tap(v => console.log(this.nome, v)))
      .subscribe(novoValor => this.valor = novoValor)
    );
  }

  ngOnDestroy() {
    this.inscricoes?.forEach(inscricao => inscricao.unsubscribe());
    console.log(`${this.nome} foi destruído.`);
  }
}
