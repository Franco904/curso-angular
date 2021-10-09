import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  animais: string[] = ['Leão', 'Cobra', 'Baleia'];
 
  getAnimais() {
    return this.animais;
  }

  addAnimal(animal: string) {
    this.animais.push(animal);
  }

  constructor() { }
}
