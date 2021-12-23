import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('Auth Guard');

    return this.verificarAcesso();
  }

  // Se usuário foi autenticado corretamente, libera o acesso às rotas
  private verificarAcesso() {
    if (this.authService.isUsuarioAutenticado()) {
      return true;  
    }

    this.router.navigate(['/login']);

    return false;
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('canLoad: Verificando se usuário pode carregar código do módulo.')
    
    return this.verificarAcesso();
  }

}
