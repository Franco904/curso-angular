import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'legenda',
  templateUrl: './campo-legenda.component.html',
  styleUrls: ['./campo-legenda.component.css']
})
export class CampoLegendaComponent implements OnInit {

  @Input() mostrarLegenda: boolean = false;
  @Input() msgLegenda: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
