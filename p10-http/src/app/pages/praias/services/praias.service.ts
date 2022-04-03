import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';
import { delay, take } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Praia } from 'src/app/pages/praias/model/praia';

@Injectable({
  providedIn: 'root'
})
export class PraiasService {
  private defaultNavigationBar = true;
  private mustChangeNavigationBar$ = new Subject<boolean>();

  private readonly API = `${environment.API}praias`;

  constructor(private httpClient: HttpClient) { }

  getPraiaById(idPraia?: number) {
    return this.httpClient.get<Praia>(`${this.API}/${idPraia}`)
      .pipe(take(1));
  }

  loadPraias() {
    return this.httpClient.get<Praia[]>(this.API)
      .pipe(delay(1000));
  }

  writePraia(praia: Praia, isEditing: boolean) {
    return isEditing ? this.updatePraia(praia) : this.createPraia(praia);
  }

  private createPraia(praia: Praia) {
    return this.httpClient.post<Praia>(this.API, praia)
      .pipe(take(1));
  }

  private updatePraia(praia: Praia) {
    return this.httpClient.put<Praia>(`${this.API}/${praia.id}`, praia)
      .pipe(take(1));
  }

  getMustChangeNavigationBar() {
    return this.mustChangeNavigationBar$.asObservable();
  }

  changeNavigationBar() {
    this.defaultNavigationBar = !this.defaultNavigationBar;
    this.mustChangeNavigationBar$.next(this.defaultNavigationBar);
  }

}
