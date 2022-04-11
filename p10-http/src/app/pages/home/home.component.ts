import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sobrePraias: string[] = ['Nome', 'Região', 'Está apta para banho'];

  constructor() { }

  ngOnInit(): void {
  }

}
