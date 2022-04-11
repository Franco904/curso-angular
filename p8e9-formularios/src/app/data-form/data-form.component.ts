import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { EMPTY, Observable } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';

import { FormValidations } from '../shared/form-validations';
import { BaseForm } from '../shared/model/base-form';
import { Cargo } from '../shared/model/cargo';
import { Cidade } from '../shared/model/cidade';
import { Endereco } from '../shared/model/endereco';
import { Estado } from '../shared/model/estado';
import { Radio } from '../shared/model/radio';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { DropdownService } from '../shared/services/dropdown.service';
import { Tecnologia } from './../shared/model/tecnologia';
import { VerificaEmailService } from './services/verifica-email.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css'],
})

// Todo o formulário será implementado aqui
export class DataFormComponent extends BaseForm implements OnInit {

  cidades: Cidade[] = [];
  estados: Estado[] = [];
  cargos: Cargo[] = [];
  tecnologias: Tecnologia[] = [];
  newsletterOps: Radio[] = [];

  frameworks = ['Angular', 'React', 'Vue', 'Sencha'];

  estadoSelecionado: boolean = false;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService,
    private verificaEmailService: VerificaEmailService
  ) {
    super(); // Chama o construtor da classe mãe
  }

  ngOnInit(): void {
    // this.estados = this.dropdownService.getEstados();

    this.dropdownService.getEstados().subscribe(
      estados => this.estados = estados
    );

    // Dropdown com objeto
    this.cargos = this.dropdownService.getCargos();

    // Dropdown múltiplo
    this.tecnologias = this.dropdownService.getTecnologias();

    // Radio buttons
    this.newsletterOps = this.dropdownService.getNewsletter();
    // this.seletors = this.dropdownService.getSelectors();

    // Cria o formulário assim que inicializa o componente
    this.loadForm();

    // Permite escutar o estado do formulário
    this.formulario.get('endereco.cep')?.statusChanges
      .pipe(
        distinctUntilChanged(),
        switchMap(status => status === 'VALID'
          ? this.cepService.consultaCep(this.formulario.get('endereco.cep')?.value)
          : EMPTY
        )
      )
      .subscribe(dados => dados ? this.populateDadosEndereco(dados) : {});

    // Escuta mudanças no select de estados para popular as cidades
    this.formulario.get('endereco.estado')?.valueChanges
      .pipe(
        map(estado => this.estados.filter(e => e.sigla === estado)), // Lista de 1 estado
        map(estados => estados && estados.length > 0 ? estados[0].id : EMPTY),
        switchMap((idEstado: number | Observable<never> | undefined) => {
          return this.dropdownService.getCidades(idEstado as number);
        }),
      )
      .subscribe(cidades => this.cidades = cidades);

    // [Franco] Acompanha o status do select de estados para habilitar o de cidades
    this.formulario.get('endereco.estado')?.statusChanges
      .subscribe((status) => status === 'VALID' ? this.estadoSelecionado = true : null);
  }

  loadForm(): void {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [
        null,
        [Validators.required, Validators.email],
        this.validateEmailAsync.bind(this)
        // Referência ao próprio componente para evitar erros
      ],
      confirmarEmail: [null, [Validators.required, Validators.email, FormValidations.equalsTo('email')]],
      senha: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],

      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidations.validateCEP]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      }),
      cargo: [null],
      tecnologias: [null],
      newsletter: ['s'],
      termos: [null, Validators.requiredTrue],
      frameworks: this.buildFrameworks()
    });
  }

  // As validações customizadas síncronas foram transferidas para a classe FormValidations

  validateEmailAsync(formControl: FormControl) {
    return this.verificaEmailService.verificarEmail(formControl.value)
      .pipe(map(emailExiste => emailExiste ? { emailExistente: true } : null));
  }

  buildFrameworks() {
    // this.frameworks = ['Angular', 'React', (...)]
    const values = this.frameworks.map(v => new FormControl(false));

    // .array(any[], ValidatorFn, AsyncValidatorFn)
    return this.formBuilder.array(values, FormValidations.requiredCheckboxes(1));
  }

  get formFrameworks() {
    return <FormArray>this.formulario.get('frameworks');
  }

  submit(): void {
    console.log(this.formulario.get('nome'));

    // Copia valor de this.formulario para objeto vazio
    let valueSubmit = Object.assign({}, this.formulario.value);

    // Atribui para cada item do FormArray frameworks o nome dos selecionados (this.frameworks[i]) ou null
    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
        .map((valor: boolean, i: number) => valor ? this.frameworks[i] : null)
        .filter((valor: string | null) => valor !== null)
    });

    // Enviando informações do formulário ao servidor (por JSON)
    this.httpClient
      .post('https://httpbin.org/post', JSON.stringify(valueSubmit))
      .subscribe(dados => {
        console.log(dados)

        // Reseta o formulário
        super.resetForm();
        // Mudança de rota
        this.router.navigate(['/submetido']);
      },
        (error) => alert('Ops.. Ocorreu um erro: \n' + error),
        (() => console.log('Fim do subscribe'))
      );
  }

  consultaCep() {
    let cep = this.formulario.get('endereco.cep')?.value;

    // Consulta o endereço pelo cep e retorna dados por http
    if (cep != null && cep !== '') {
      this.cepService.consultaCep(cep)?.subscribe(
        dados => this.populateDadosEndereco(dados)
      );

      // Limpa os campos
      this.limparCamposForm();
    }

  }

  populateDadosEndereco(dados: Endereco) {
    this.formulario.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  limparCamposForm() {
    this.formulario.patchValue({
      endereco: {
        cep: null,
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }
}
