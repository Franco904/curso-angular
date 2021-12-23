import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http: HttpClient) { }

  consultaCep(cep: string) {
    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    // Verifica se campo cep possui valor informado.
    if (cep !== '') {

      // Expressão regular para validar o CEP.
      let validacep = /^[0-9]{8}$/;

      // Valida o formato do CEP.
      if(validacep.test(cep)) {

          // Consulta o webservice viacep.com.br/
          return this.http.get(`https://viacep.com.br/ws/${cep}/json`);
       }
    }
    // Retorna vazio caso cep esteja em branco
    return of({});
  }

}
