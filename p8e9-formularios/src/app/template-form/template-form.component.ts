import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { Endereco } from '../shared/model/endereco';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { Usuario } from './model/usuario';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: Usuario = {
    nome: '',
    email: ''
  };

  constructor(
    private httpClient: HttpClient,
    private cepService: ConsultaCepService
  ) { }

  ngOnInit(): void { }

  onSubmit(formulario: NgForm) {
    // Enviando informações do formulário ao servidor (por JSON)
    if (formulario.form.valid) {
      this.httpClient
        .post('https://httpbin.org/post', JSON.stringify(formulario.value))
        .subscribe(dados => console.log(dados));
    }

  }

  verificaInvalidTouched(campo: NgModel) {
    return (campo.invalid && campo.touched)!;
  }

  consultaCep(evento: FocusEvent, form: NgForm) {
    console.log(evento);
    let cep = ((<HTMLInputElement>evento.target).value);

    // Se o cep não for null/undefined nem vazio
    if (cep != null && cep !== '') {
      this.cepService.consultaCep(cep)?.subscribe(
        dados => this.populateDadosEndereco(dados, form)
      );

      // Limpa os campos
      this.limparCamposForm(form);
    }

  }

  populateDadosEndereco(dados: Endereco, formulario: NgForm) {
    // formulario.setValue({
    //   nome: formulario.value.nome,
    //   email: formulario.value.email,
    //   endereco: {
    //     cep: dados.cep,
    //     numero: '',
    //     complemento: dados.complemento,
    //     rua: dados.logradouro,
    //     bairro: dados.bairro,
    //     cidade: dados.localidade,
    //     estado: dados.uf
    //   }
    // });

    formulario.form.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  limparCamposForm(formulario: NgForm) {
    formulario.form.patchValue({
      endereco: {
        cep: null,
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }
}
