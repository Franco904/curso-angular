import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { delay, take } from 'rxjs/operators';

import { Praia } from 'src/app/pages/praias/model/praia';
import { environment } from 'src/environments/environment';
import { CrudService } from '../../shared/services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class PraiasService extends CrudService<Praia> {
  private defaultNavigationBar = true;
  private mustChangeNavigationBar$ = new Subject<boolean>();

  constructor(protected httpClient: HttpClient) {
    super(httpClient, `${environment.API}praias`);
  }

  getPraiaById(idPraia: number) {
    return this.get(idPraia).pipe(take(1));
  }

  getAllPraias() {
    return this.getAll().pipe(delay(500));
  }

  writePraia(praia: Praia, isEditing: boolean) {
    return this.write(praia, isEditing).pipe(take(1));
  }

  deletePraia(idPraia: number) {
    return this.delete(idPraia).pipe(take(1));
  }

  getMustChangeNavigationBar() {
    return this.mustChangeNavigationBar$.asObservable();
  }

  changeNavigationBar() {
    this.defaultNavigationBar = !this.defaultNavigationBar;
    this.mustChangeNavigationBar$.next(this.defaultNavigationBar);
  }

}
