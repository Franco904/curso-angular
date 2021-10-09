import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];

  // 'private' faz com que cursosService seja um atributo da classe CursosComponent
  constructor(private cursosService: CursosService) { 
    this.cursos = cursosService.getCursos();
  }

  ngOnInit(): void {
    // this.cursos = this.cursosService.getCursos();
    CursosService.criouNovoCurso.subscribe(
      curso => console.log(curso)
    );
  }

}
