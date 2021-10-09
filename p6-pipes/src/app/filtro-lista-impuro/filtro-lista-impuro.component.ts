import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AnimaisService } from '../animais.service';

@Component({
  selector: 'filtro-lista-impuro',
  templateUrl: './filtro-lista-impuro.component.html',
  styleUrls: ['./filtro-lista-impuro.component.css']
})
export class FiltroListaImpuroComponent implements OnInit {
  
  animais: string[] = [];
  filtro: string = '';

  addAnimal(animal: string) {
    this.animaisService.addAnimal(animal);
  }

  obterAnimais() {
    if (this.animais.length === 0 || this.filtro === '' || this.filtro.trim() === '') {
      return this.animais;
    }

    return this.animais.filter(
      v => v.toLowerCase().indexOf(this.filtro) >= 0
    )
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  })

  constructor(private animaisService: AnimaisService) {
    this.animais = animaisService.getAnimais();
  }

  ngOnInit(): void {
  }
}
