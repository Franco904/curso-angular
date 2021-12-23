import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { delay, map, tap } from 'rxjs/operators';

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
        map((dados: any) => dados.emails),
        // tap(console.log),
        map((dados: any[]) => dados.filter(obj => obj.email === email)),
        // tap(console.log),
        map((dados: any[]) => dados.length > 0)
        // tap(console.log)
      );
  }
}
