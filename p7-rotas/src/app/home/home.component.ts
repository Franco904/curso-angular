import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../login/auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
