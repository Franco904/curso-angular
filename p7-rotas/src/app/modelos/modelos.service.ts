import { Injectable } from '@angular/core';

import { Modelo } from './modelo';

@Injectable({
  providedIn: 'root'
})
export class ModelosService {

  // Mock de objetos (simulação)
  private modelos: Modelo[] = [
    {id: 1, nome: 'Fiesta', marca: 'Ford', tipo: 'Hatch'},
    {id: 2, nome: 'V-Drive', marca: 'Nissan', tipo: 'Sedan'},
    {id: 3, nome: 'XC90', marca: 'Volvo', tipo: 'SUV'}
  ]

  getModelos() {
    return this.modelos;
  }

  getModelo(id: number) {
    for (let modelo of this.modelos) {
        if (id == modelo.id) {
          return modelo;
        }
    }
    return null as any;
  }

  constructor() { }
}
