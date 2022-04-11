import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from './../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ModelosActivateChildGuard implements CanActivateChild {

  constructor(private authService: AuthService) {
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('ModelosActivateChild Guard');

    // Restringe o acesso para a rota de edição de modelos (botão Editar)
    // Possui "editar" na url e não é desenvolvedor? => alert()

    if (state.url.includes('editar') && this.authService.getUsuarioAtivo().tipo == 'Normal') {
      alert('Usuário sem acesso!');

      return false;
    }

    return true;
  }

}