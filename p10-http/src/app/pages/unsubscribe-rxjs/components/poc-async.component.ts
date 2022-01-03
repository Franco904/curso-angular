import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { EnviarValorService } from '../enviar-valor.service';

@Component({
  selector: 'poc-async',
  template: `
    <poc-base [nome]="nome"
      [valor]="valor$ | async" estilo="bg-success">
    </poc-base>
  `
})
export class PocAsyncComponent implements OnInit {

  nome = 'Componente com async';
  valor$?: Observable<string>;

  constructor(private enviarValorService: EnviarValorService) { }

  ngOnInit(): void {
    this.valor$ = this.enviarValorService.getValor();
  }

}
