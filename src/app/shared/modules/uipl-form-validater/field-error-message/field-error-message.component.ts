import { Component, Input } from '@angular/core';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';

@Component({
  selector: 'field-error-message',
  templateUrl: './field-error-message.component.html',
  styleUrls: ['./field-error-message.component.scss']
})
export class FieldErrorMessageComponent {

  private static readonly errorMessages = {
    'required': (params) => 'Required',
    'min': (params) => 'Min value is ' + params.min,
    'max': (params) => 'Max value is ' + params.max,
    'minlength': (params) => 'Min ' + params.requiredLength + ' char',
    'maxlength': (params) => 'Max ' + params.requiredLength + ' char',
    'pattern': (params) => 'Invalid value',
    'customPattern': (params) => ` ${params.message}`,
    'email': (params) => ` ${params.message}`,
    'compareTo': (params) =>  params.targetControlName + ' do not match',
    'mobile': (params) => `${params.message}`,
    'pincode': (params) => 'Invalid PIN code',
    'noWhiteSpace': (params) => 'Empty or white space not allowed',
    // 'minmaxnumber' : (params) => '* Invalid value.',
    'rangeMin': (params) => `${params.message}`,
    'rangeMax': (params) => `${params.message}`,
    'validString': (params) => `${params.message}`,
    'validName': (params) => `${params.message}`,
    'password': (params) => 'Invalid password',
    'lowercaseOnly': (params) => 'Should be in lowercase',
    'arrayLength': (params) => 'Invalid value',
    'validIp': (params) => 'Invalid IP',
    'ifsc': (params) => 'Invalid IFSC Code',
    'invalid_file': (params) => `${params.message}`,
    'url': (params) => 'Invalid URL',
    'isValidArray': (params) => `${params.message}`,
    'pancard': (params) => `${params.message}`,
   'aadhar': (params) => `${params.message}`,
    'validAddress': (params) => `Invalid Value`,
    'checkFirstNonZero': (params) => `${params.message}`
  };

  @Input()
  private control: AbstractControlDirective | AbstractControl;

  @Input()
  private customError?: {};

  shouldShowErrors(): boolean {
    return this.control &&
      this.control.errors &&
      this.control.touched;
    // (this.control.dirty || this.control.touched);
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field], this.control));
  }

  getError(): string {
    const errors = Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field], this.control));
    return errors[0];
  }

  private getMessage(type: string, params: any, control: any) {
    let fname = this.getControlName(control);
    fname = fname.replace('_', ' ').replace(' id', '').toLowerCase();
    fname = fname.replace(/\b\w/g, l => l.toUpperCase());
    // console.log(type);
    // console.log(params);
    if (this.customError && this.customError['*']) {
      return this.customError['*'] || 'Invalid Value';
    }

    if (this.customError && this.customError[type]) {
      return this.customError[type] || 'Invalid Value';
    }

    if (!FieldErrorMessageComponent.errorMessages[type]) {
      return 'Invalid Value';
    }
    const msg = FieldErrorMessageComponent.errorMessages[type](params);
    return msg.replace('##FIELD##', fname);
  }

  getControlName(c: AbstractControl): string | null {
    const formGroup = c.parent.controls;
    return Object.keys(formGroup).find(name => c === formGroup[name]) || null;
  }

}
