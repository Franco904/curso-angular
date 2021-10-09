import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioEstaAutenticado: boolean = false;
  private usuarioAtivo: Usuario = new Usuario();

  mostrarMenu = new EventEmitter<boolean>();

  // Mock de usuários já cadastrados (simulação)
  private usuarios: Usuario[] = [
    {nome: 'Franco', senha: '1234', tipo: 'Desenvolvedor'},
    {nome: 'Augusto', senha: '5678', tipo: 'Normal'},
    {nome: 'Scooby', senha: 'amopassear', tipo: 'Normal'}
  ]

  constructor(private router: Router) { }

  isUsuarioAutenticado() {
    return this.usuarioEstaAutenticado;
  }

  getUsuarioAtivo() {
    return this.usuarioAtivo;
  }

  fazerLogin(usuario: Usuario) {
      for (let u of this.usuarios) {
        if (usuario.nome == u.nome && usuario.senha == u.senha) {
            this.usuarioEstaAutenticado = true;
            this.usuarioAtivo = u;

            this.mostrarMenu.emit(true);
            
            this.router.navigate(['/home']);

            return console.log(`Login de "${usuario.nome}" efetuado com sucesso.`);
        }
      }
      this.usuarioEstaAutenticado = false;
      this.mostrarMenu.emit(false);

      return console.log(`O usuário "${usuario.nome}" não existe ou não foi digitado corretamente.`);
  }

}
