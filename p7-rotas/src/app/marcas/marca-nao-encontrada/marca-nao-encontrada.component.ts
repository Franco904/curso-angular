import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marca-nao-encontrada',
  templateUrl: './marca-nao-encontrada.component.html',
  styleUrls: ['./marca-nao-encontrada.component.css']
})
export class MarcaNaoEncontradaComponent implements OnInit {

  // id: any;

  // inscricao?: Subscription;

  constructor(private route: ActivatedRoute) {
    // console.log(this.route);
   }

  ngOnInit(): void {
    // this.inscricao;
    // this.inscricao = this.route.params.subscribe(
    //   (params: any) => this.id = params['id'] 
    // );
  }

  // ngOnDestroy() {
  //   this.inscricao?.unsubscribe();
  // }

}
