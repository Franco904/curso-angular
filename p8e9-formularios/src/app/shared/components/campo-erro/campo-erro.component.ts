import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'campo-erro',
  templateUrl: './campo-erro.component.html',
  styleUrls: ['./campo-erro.component.css']
})
export class CampoErroComponent implements OnInit {

  @Input() mostrarErro: boolean = false;
  @Input() msgErro: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
