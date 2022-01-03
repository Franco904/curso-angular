import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sobrePraias: string[] = ['Nome', 'Região', 'Apta para banho ou não'];

  constructor() { }

  ngOnInit(): void {
  }

}
