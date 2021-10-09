import { Component, OnInit } from '@angular/core';

import { CursosService } from './../cursos/cursos.service';

@Component({
  selector: 'criar-cursos',
  templateUrl: './criar-cursos.component.html',
  styleUrls: ['./criar-cursos.component.css'],
})
export class CriarCursosComponent implements OnInit {

  cursos: string[] = [];

  constructor(private cursosService: CursosService) { 
    this.cursos = cursosService.getCursos();
  }

  addCurso(curso: string) {
    this.cursosService.addCurso(curso);
  }

  ngOnInit(): void {
    this.cursosService.emitirCursoCriado.subscribe(   
      // Arrow function
      curso => console.log(curso)
      
      // function (curso) {
      //     console.log(curso);
      // }
    );
  }

}
