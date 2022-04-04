import { FormArray, FormControl, FormGroup } from '@angular/forms';

import { Cargo } from './cargo';

export abstract class BaseForm {

  formulario!: FormGroup;

  abstract loadForm(): void

  abstract submit(): void;

  onSubmit() {
    if (this.formulario.valid) {
      this.submit();
    }
    else {
      console.log('O formulário é inválido.')
      this.verificaValidacoes(this.formulario);
    }
  }

  verificaValidacoes(formGroup: FormGroup | FormArray) {
    // Iterando as chaves do formulário como um objeto
    Object.keys(formGroup.controls).forEach(
      campo => {
        const controle = formGroup.get(campo);
        controle?.markAsTouched(); // Mostra erro vermelho

        // Verifica se o campo é um FormGroup/FormArray ou não
        if (controle instanceof FormGroup || controle instanceof FormArray) {
          // Recursão
          this.verificaValidacoes(controle)
        }
      });
  }

  resetForm() {
    this.formulario.reset();
  }

  getFormControl(campo: string) {
    // Acesso ao FormControl com método get(..)
    return <FormControl>this.formulario.get(campo);
  }

  verificaInvalidTouched(campo: FormControl) {
    return campo.invalid && campo.touched;
  }

  verificaPending(campo: string) {
    let controle = this.formulario.get(campo);

    return controle!.status === 'PENDING';
  }

  compararCargos(obj1: Cargo, obj2: Cargo) {
    // Se objeto 1 e objeto 2 existem, compare a semelhança entre eles
    return obj1 && obj2
      ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel)
      : obj1 === obj2;
  }
}
