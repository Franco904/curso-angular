import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'praias-detalhes',
  templateUrl: './praias-detalhes.component.html',
  styleUrls: ['./praias-detalhes.component.scss']
})
export class PraiasDetalhesComponent implements OnInit {
  nome: string = '';
  regiao: string = '';
  banhoLabel: string = 'Própria para banho';
  colorLabel: string = 'accent';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const praia = this.route.snapshot.data['praia'];

    this.nome = praia.nome;
    this.regiao = praia.regiao;
    this.banhoLabel = praia.banho
      ? 'Própria para banho'
      : 'Imprópria para banho';
    this.colorLabel = praia.banho
      ? 'accent'
      : 'warn';
  }

}
