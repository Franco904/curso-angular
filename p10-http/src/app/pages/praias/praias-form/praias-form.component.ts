import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Radio } from '../model/radio';

@Component({
  selector: 'praias-form',
  templateUrl: './praias-form.component.html',
  styleUrls: ['./praias-form.component.scss']
})
export class PraiasFormComponent implements OnInit {
  form!: FormGroup;

  private banhoOps: Radio[] = [
    {valor: 's', descricao: 'Sim'},
    {valor: 'n', descricao: 'Não'}
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      regiao: [null, Validators.required],
      banho: ['s']
    });
  }

}
