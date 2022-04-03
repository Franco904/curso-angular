import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Radio } from '../model/radio';
import { PraiasService } from '../services/praias.service';
import { AlertModalService } from '../../shared/services/alert-modal.service';

@Component({
  selector: 'praias-form',
  templateUrl: './praias-form.component.html',
  styleUrls: ['./praias-form.component.scss']
})
export class PraiasFormComponent implements OnInit {
  form!: FormGroup;

  isSubmitted: boolean = false;
  isLoading: boolean = false;

  banhoOps: Radio[] = [
    { valor: 's', descricao: 'Sim' },
    { valor: 'n', descricao: 'Não' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private praiasService: PraiasService,
    private alertModalService: AlertModalService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      regiao: [null, Validators.required],
      banho: ['s'],
    });
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.form.valid) {
      this.praiasService.createPraia(this.form.value)
        .subscribe({
          next: () => this.isLoading = true,
          complete: () => {
            this.isLoading = false;
            this.alertModalService.showSuccessAlert('Praia registrada com sucesso.');
            this.location.back();
          },
        });
    }
  }

  getFormControl(control: string) {
    return this.form.get(control);
  }

  checkFieldIsInvalid(control: string) {
    let formControl = this.form.get(control)!;

    return formControl.errors && (this.isSubmitted || (formControl.invalid && formControl.touched));
  }

}
