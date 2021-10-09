import { MarcaNaoEncontradaComponent } from '../marca-nao-encontrada/marca-nao-encontrada.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { MarcasService } from '../marcas.service';

@Component({
  selector: 'marca-detalhe',
  templateUrl: './marca-detalhe.component.html',
  styleUrls: ['./marca-detalhe.component.css']
})
export class MarcaDetalheComponent implements OnInit {

  id: any;
  marca: any;

  inscricao?: Subscription; // Serve para armazenar a inscrição na propriedade

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private marcasService: MarcasService) {
    // params é um objeto, portanto é possível acessar o valor de uma chave com ['chave']
    // this.id = this.route.snapshot.params['id']; 
    // console.log(this.route);
   }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id']
        this.marca = this.marcasService.getMarca(this.id) // 'null' se o id não existe, 'marca' se o id existe

        if (this.marca == null) {
          // router (Router) redireciona a rota
          this.router?.navigate(['/marcas/naoEncontrada']);
        }
      }
    ); 
  }

  ngOnDestroy() {
    // Desabilita a inscrição (armazenada no atributo) quando o componente é destruído
    this.inscricao?.unsubscribe();
  }

}
