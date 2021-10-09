import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  getMarcas() {
    return [
      {id: 1, nome: 'Ford'},
      {id: 2, nome: 'Nissan'},
      {id: 3, nome: 'Volvo'}
    ]
  }

  getMarca(id: number) {
    let marcas = this.getMarcas();
    for (let m of marcas) {
      if (id == m.id) {   // Se o id informado for igual a um dos cadastrados, retorne a marca respectiva.
        return m;
      }
    }
    return null;
  }
  
  constructor() { }
}
