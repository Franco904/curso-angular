import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { Modelo } from '../modelos/modelo';
import { ModelosService } from '../modelos/modelos.service';

@Injectable({
  providedIn: 'root'
})
export class ModeloDetalheResolver implements Resolve<Modelo> {

  constructor(private modelosService: ModelosService) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Modelo> {
    
    console.log('ModeloDetalhe Resolver');

    let id = route.params['id']
    
    return this.modelosService.getModelo(id);
  }
}
