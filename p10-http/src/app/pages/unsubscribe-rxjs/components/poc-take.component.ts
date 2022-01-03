import { Component, OnInit } from '@angular/core';

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
  }

}
