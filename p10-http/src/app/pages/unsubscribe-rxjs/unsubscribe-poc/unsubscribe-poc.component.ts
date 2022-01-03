import { Component, OnInit } from '@angular/core';

import { EnviarValorService } from '../enviar-valor.service';

@Component({
  selector: 'unsubscribe-poc',
  templateUrl: './unsubscribe-poc.component.html',
  styleUrls: ['./unsubscribe-poc.component.scss']
})
export class UnsubscribePocComponent implements OnInit {

  mostrarComponentes = true;

  constructor(private enviarValorService: EnviarValorService) { }

  ngOnInit() {
  }

  emitirValor(valor: string) {
    this.enviarValorService.emitirValor(valor);
  }

  destruirComponentes() {
    this.mostrarComponentes = !this.mostrarComponentes;
  }
}
