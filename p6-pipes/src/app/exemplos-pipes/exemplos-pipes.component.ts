import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'deep learning',
    autor: 'Ian Goodfellow',
    editora: 'The Mit Press',
    avaliacao: 4.542,
    paginas: 775,
    preco: 137.87,
    data: new Date(2016, 0, 1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
