import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { EMPTY, Observable } from 'rxjs';

import { Praia } from '../model/praia';
import { PraiasService } from '../services/praias.service';

@Injectable({
  providedIn: 'root'
})
export class PraiasResolverGuard implements Resolve<Praia> {

  constructor(private service: PraiasService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Praia | Observable<Praia> | Promise<Praia> {

    // Editing / Details
    if (route.params && route.params['id']) {
      return this.service.getPraiaById(route.params['id']);
    }

    return EMPTY;
  }

}
