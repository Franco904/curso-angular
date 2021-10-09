import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';
import { AuthService } from './auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  fazerLogin() {
    this.authService.fazerLogin(this.usuario);
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
}