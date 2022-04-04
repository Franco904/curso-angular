import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { Marca } from './marca';
import { MarcasService } from './marcas.service';

@Component({
  selector: 'marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {
  marcas: Marca[] = [];
  pagina: number = 1;

  inscricao?: Subscription;

  constructor(
    private marcasService: MarcasService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.marcas = this.marcasService.getMarcas();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams) => this.pagina = queryParams['pagina']
    )
  }

  ngOnDestroy() {
    this.inscricao?.unsubscribe();
  }

  proximaPagina() {
    this.router.navigate(['/marcas'], { queryParams: { 'pagina': ++this.pagina } });
  }

}
