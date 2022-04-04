import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { Modelo } from '../modelo';
import { ModelosService } from '../modelos.service';
import { IFormCanDeactivate } from './../../guards/iform-candeactivate';

@Component({
  selector: 'app-modelo-form',
  templateUrl: './modelo-form.component.html',
  styleUrls: ['./modelo-form.component.css']
})
export class ModeloFormComponent implements OnInit, IFormCanDeactivate {
  id?: number;
  modelo?: Modelo = new Modelo();

  formMudou: boolean = false;

  inscricao?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private modelosService: ModelosService
  ) { }

  ngOnInit(): void {
    // *Para receber dados de ModeloDetalhe, sem precisar usar instância do serviço novamente
    // *Não funciona corretamente, pois a cada reload da página, "state.data" fica undefined.
    // this.modelo = history.state.data;

    this.inscricao = this.route.params.subscribe(
      (params) => {
        this.id = params['id']
        this.modelo = this.modelosService.getModelo(this.id!)!
      }
    );
  }

  ngOnDestroy() {
    this.inscricao?.unsubscribe();
  }

  alterouInput() {
    this.formMudou = true;
  }

  podeMudarRota() {
    if (this.formMudou) {
      return confirm('Deseja sair da página atual? As alterações do formulário podem ser perdidas.');
    }
    return true;
  }

}
