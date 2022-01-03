import { Subscription, Observable } from 'rxjs';
import { PraiasService } from './services/praias.service';
import { Component, OnInit } from '@angular/core';

import { Praia } from './model/praia';

@Component({
  selector: 'praias',
  templateUrl: './praias.component.html',
  styleUrls: ['./praias.component.scss'],
  preserveWhitespaces: true
})
export class PraiasComponent implements OnInit {

  praias$?: Observable<Praia[]>;

  constructor(private praiasService: PraiasService) { }

  ngOnInit(): void {
    this.praias$ = this.praiasService.listarPraias();
  }

}
