import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
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

  isEditing: boolean = false;

  isSubmitted: boolean = false;
  isLoading: boolean = false;

  banhoOps: Radio[] = [
    { valor: true, descricao: 'Sim' },
    { valor: false, descricao: 'Não' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private route: ActivatedRoute,
    private praiasService: PraiasService,
    private alertModalService: AlertModalService,
  ) { }

  ngOnInit(): void {
    // this.route.params
    //   .pipe(
    //     map((params) => params['id']),
    //     switchMap((id) => this.praiasService.getPraiaById(id))
    //   )
    //   .subscribe({
    //     next: (praia) => this.updateForm(praia),
    //   });
    
    this.alertModalService.showDangerAlert('Houve um erro ao editar a praia. Tente novamente mais tarde.');

    const praia = this.route.snapshot.data['praia'];
    this.isEditing = praia !== undefined;

    this.form = this.formBuilder.group({
      id: [praia?.id],
      nome: [praia?.nome, Validators.required],
      regiao: [praia?.regiao, Validators.required],
      banho: [praia?.banho ?? true],
    });
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.form.valid) {
      let msgSuccess = this.isEditing
        ? 'Praia editada com sucesso.'
        : 'Praia registrada com sucesso.';
      let msgError = this.isEditing
        ? 'Houve um erro ao editar a praia. Tente novamente mais tarde.'
        : 'Houve um erro ao registrar a praia. Tente novamente mais tarde.'

      this.praiasService.writePraia(this.form.value, this.isEditing)
        .subscribe({
          next: () => this.isLoading = true,
          error: () => this.alertModalService.showDangerAlert(msgError),
          complete: () => {
            this.isLoading = false;
            this.alertModalService.showSuccessAlert(msgSuccess);
            this.location.back();
          }
        }); 
    }
  }

  // updateForm(praia: Praia) {
  //   this.form.patchValue({
  //     id: praia.id,
  //     nome: praia.nome,
  //     regiao: praia.regiao,
  //     banho: praia.banho,
  //   });
  // }

  getFormControl(control: string) {
    return this.form.get(control);
  }

  checkFieldIsInvalid(control: string) {
    let formControl = this.form.get(control)!;

    return formControl.errors && (this.isSubmitted || (formControl.invalid && formControl.touched));
  }

}
