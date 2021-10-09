import { Component, OnInit } from '@angular/core';

import { AnimaisService } from './../animais.service';

@Component({
  selector: 'filtro-lista',
  templateUrl: './filtro-lista.component.html',
  styleUrls: ['./filtro-lista.component.css']
})
export class FiltroListaComponent implements OnInit {
 
  animais: string[] = [];
  filtro: string = '';

  addAnimal(animal: string) {
    this.animaisService.addAnimal(animal);
  }

  constructor(private animaisService: AnimaisService) {
    this.animais = animaisService.getAnimais();
  }

  ngOnInit(): void {
  }

}
