import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { Cargo } from '../model/cargo';
import { Cidade } from '../model/cidade';
import { Estado } from '../model/estado';
import { Tecnologia } from '../model/tecnologia';
import { Radio } from '../model/radio';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  private cargos: Cargo[] = [
    {nome: 'Desenvolvedor Mobile', nivel: 'Junior', desc: 'Dev Jr'},
    {nome: 'Analista de Dados', nivel: 'Senior', desc: 'Analista Sr'},
    {nome: 'Gerente de Projetos', nivel: 'Pleno', desc: 'Gerente Pl'}
  ];

  private tecnologias: Tecnologia[] = [
    {nome: 'java', desc: 'Java'},
    {nome: 'javascript', desc: 'Javascript'},
    {nome: 'nodejs', desc: 'NodeJS'},
    {nome: 'ruby', desc: 'Ruby'},
    {nome: 'mysql', desc: 'MySQL'},
  ]

  private radioOps: Radio[] = [
    {valor: 's', desc: 'Sim'},
    {valor: 'n', desc: 'Não'}
  ];

  // private selectors: string[] = ['dumbbell', 'running'];

  constructor(private httpClient: HttpClient) { }

  getCidades(idEstado: number) {
    return this.httpClient.get<Cidade[]>('assets/dados/cidades.json')
    .pipe(
      map((cidades: Cidade[]) => cidades.filter(c => c.idEstado == idEstado))
    )
  }

  getEstados() {
    return this.httpClient.get<Estado[]>('assets/dados/estados.json');
  }

  getCargos() {
    return this.cargos;
  }

  getTecnologias() {
    return this.tecnologias;
  }

  // Radio buttons
  getNewsletter() {
    return this.radioOps;
  }
}
