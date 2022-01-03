import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'poc-base',
  templateUrl: './poc-base.component.html',
  styleUrls: ['./poc-base.component.scss']
})
export class PocBaseComponent implements OnInit {

  @Input() nome?: string;
  @Input() valor?: string;
  @Input() estilo?: string;

  constructor() { }

  ngOnInit(): void {
    // this.valor = this.valor == null ? '' : this.valor;
  }

}
