import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from './model/usuario';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';

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

  ngOnInit(): void {
  }

  onSubmit(formulario: any) {
    console.log(formulario);

    // Enviando informações do formulário ao servidor (por JSON)
    if (formulario.form.valid) {
      this.httpClient
      .post('https://httpbin.org/post', JSON.stringify(formulario.value))
      .subscribe(dados => console.log(dados));
    }  

  }

  verificaInvalidTouched(campo: any) {
    return campo.invalid && campo.touched;
  }

  consultaCep(evento: any, form: any) {
    let cep = ((<HTMLInputElement> evento.target).value);

    // Se o cep não for null/undefined nem vazio
    if (cep != null && cep !== '') {
      this.cepService.consultaCep(cep)?.subscribe(
        dados => this.populateDadosEndereco(dados, form)
      );

      // Limpa os campos
      this.limparCamposForm(form);
    }

  }

  populateDadosEndereco(dados: any, formulario: any) {
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

  limparCamposForm(formulario: any) {
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
