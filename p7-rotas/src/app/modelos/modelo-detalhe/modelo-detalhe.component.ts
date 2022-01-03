import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from 'src/app/login/auth.service';
import { Modelo } from '../modelo';

@Component({
  selector: 'app-modelo-detalhe',
  templateUrl: './modelo-detalhe.component.html',
  styleUrls: ['./modelo-detalhe.component.css']
})
export class ModeloDetalheComponent implements OnInit {

  modelo: Modelo = new Modelo();
  desenvolvedor: boolean = true;

  inscricao?: Subscription;

  editarModelo() {
    this.router.navigate(['/modelos', this.modelo.id, 'editar']);
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private modelosService: ModelosService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    // (!) O modelo é carregado pela guarda Resolve

    // this.inscricao = this.route.params.subscribe(
    //   (params: any) => {
    //     let id = params['id']
    //     this.modelo = this.modelosService.getModelo(id)
    //   }
    // );

    console.log('ngOnInit: ModeloDetalheComponent');

    this.inscricao = this.route.data.subscribe(
      info => {
        console.log('Recebendo objeto Modelo do resolver.');
        this.modelo = info.modelo
      }
    );

    this.desenvolvedor = this.authService.getUsuarioAtivo().tipo === 'Desenvolvedor' ? true : false;
  }

  ngOnDestroy() {
    this.inscricao?.unsubscribe();
  }
}
