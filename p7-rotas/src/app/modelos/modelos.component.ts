import { Component, OnInit } from '@angular/core';

import { Modelo } from './modelo';
import { ModelosService } from './modelos.service';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.css']
})
export class ModelosComponent implements OnInit {

  modelos: Modelo[] = [];

  constructor(private modelosService: ModelosService) { }

  ngOnInit(): void {
    this.modelos = this.modelosService.getModelos();
  }

}
