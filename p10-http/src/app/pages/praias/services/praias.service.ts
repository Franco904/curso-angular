import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

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
    return this.get(idPraia);
  }

  getAllPraias() {
    return this.getAll();
  }

  writePraia(praia: Praia, isEditing: boolean) {
    return this.write(praia, isEditing);
  }

  deletePraia(idPraia: number) {
    return this.delete(idPraia);
  }

  getMustChangeNavigationBar() {
    return this.mustChangeNavigationBar$.asObservable();
  }

  changeNavigationBar() {
    this.defaultNavigationBar = !this.defaultNavigationBar;
    this.mustChangeNavigationBar$.next(this.defaultNavigationBar);
  }

}
