import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviarValorService {

  private emissor$ = new Subject<string>(); // Emitter do RxJS

  constructor() { }

  emitirValor(valor: string) {
    this.emissor$.next(valor); // next() emite o valor
  }

  getValor() {
    return this.emissor$.asObservable(); // Acesso do valor via subscribe
  }
}
