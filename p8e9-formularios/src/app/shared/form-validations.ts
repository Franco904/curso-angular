import { AbstractControl, FormArray, FormControl, FormGroup, ValidatorFn } from "@angular/forms";

import { VerificaEmailService } from "src/app/data-form/services/verifica-email.service";

// Validações customizadas
export class FormValidations {

    static equalsTo(stringField: string): any {
        const validator = (formControl: FormControl) => {
    
          // formControl: campo de confirmação do formulário
    
          // Formulário pode não ter sido totalmente renderizado ainda
          if (!formControl.root || !(<FormGroup>formControl.root).controls) {
            return null;
          }
    
          // field: campo original do formulário
          const field = (<FormGroup>formControl.root).get(stringField);
    
          if (!field) {
            throw new Error('É necessário informar um campo válido.');
          }
    
          return field.value === formControl.value ? null : { equalsTo: stringField };
        };
    
        return validator;
      }

    static validateCEP(control: FormControl) {
        const cep = control.value;

        if (cep && cep !== '') {
            // Expressão regular para validar o CEP.
            let validacep = /^[0-9]{5}-[0-9]{3}$/;

            // Valida o formato do CEP se está de acordo.
            return validacep.test(cep) ? null : { cepInvalido: true };
        }
        return null
    }

    static requiredCheckboxes(min = 1) {
        const validator: ValidatorFn = ((formArray: AbstractControl) => {

            if (formArray instanceof FormArray) {

                // P. FUNCIONAL
                let totalSelecionado = formArray['controls']
                .map(controle => controle.value) // controle.value: boolean
                .reduce((total, atual) => atual ? total + atual : total, 0);

                // // Se campo "framework" for válido, retorna null, 
                // // do contrário retorna um objeto
                return totalSelecionado >= min ? null : { required: true };
            }
            throw new Error('Erro na validação.')
        });

        return validator;
    }

    // Base de mensagens de erro
    static getErrors(validatorName: string, validatorValue?: any) {
        const config: any = {
            'required': 'Campo obrigatório',
            'minlength': `${validatorValue.requiredLength} caracteres no mínimo`,
            'maxlength': `${validatorValue.requiredLength} caracteres no máximo`,
            'email': 'Formato do email inválido',
            'equalsTo': 'Os emails não são iguais',
            'cepInvalido': 'Formato do CEP inválido',
            'emailExistente': 'Email já cadastrado'
        };

        return config[validatorName];
    }
}