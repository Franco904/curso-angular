import { Subscription } from 'rxjs';
import { Component } from '@angular/core';

import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'p7-rotas';

  menu: boolean = false;
  inscricao?: Subscription;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    // Se mostrarMenu emitir 'true', o atributo deste
    // componente recebe true também e a navbar é mostrada.
    this.inscricao = this.authService.mostrarMenu.subscribe(
      mostrar => this.menu = mostrar
    );
  }

  ngOnDestroy() {
    this.inscricao?.unsubscribe();
  }
}
