import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { delay } from 'rxjs/operators';

import { environment } from './../../../../../../p10-http/src/environments/environment';
import { Praia } from '../model/praia';

@Injectable({
  providedIn: 'root'
})
export class PraiasService {

  private readonly API = `${environment.API}praias`;

  constructor(private httpClient: HttpClient) { }

  listarPraias() {
    // Retorna praias na API
    return this.httpClient.get<Praia[]>(this.API)
      .pipe(delay(3000));
  }
}
