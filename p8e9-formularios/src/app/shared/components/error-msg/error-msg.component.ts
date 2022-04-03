import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FormValidations } from '../../form-validations';

@Component({
  selector: 'error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent implements OnInit {

  @Input() control?: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.errorMessage;
  }

  // Itera cada validator (required, etc) no "errors" do controle
  get errorMessage() {
    for (const property in this.control?.errors) {
      if (this.control?.errors.hasOwnProperty(property) && this.control.touched) {

          return FormValidations.getErrors(property, this.control.errors[property])
      }
    }

    return null;
  }

}
