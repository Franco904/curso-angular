import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { delay, map, tap } from 'rxjs/operators';

export class Json {
  emails?: string;
  email?: string;
}

@Injectable({
  providedIn: 'root'
})
export class VerificaEmailService {

  constructor(private httpClient: HttpClient) { }

  verificarEmail(email: string) {

    // Usando operadores RxJS
    return this.httpClient.get('assets/dados/verificacaoEmail.json')
      .pipe(
        delay(2000), // Intervalo para requisições
        map((dados: Json) => dados.emails),
        tap(console.log),
        map((dados: Json[]) => dados.filter(obj => obj.email === email)),
        map((dados: Json[]) => dados.length > 0)
      );
  }
}
