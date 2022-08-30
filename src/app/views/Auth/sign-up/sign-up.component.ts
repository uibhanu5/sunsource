import { BaseClass } from './../../../shared/services/common/baseClass';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestEnums } from 'src/app/shared/constants/constants/request-enums';
import { ToastrService } from 'ngx-toastr';
import { CustomValidators } from 'src/app/shared/services/common/validators';
import { CommonRequestService } from 'src/app/shared/services/http/common-request.service';
import { LoginService } from '../services/login.service';
import { AppTokens, CommonMessages } from 'src/app/shared/constants/constants/common-constants';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignupComponent extends BaseClass implements OnInit {
  public signUpForm: FormGroup | any;
  localStorageService: any;

  signupValidationMessages = {
    firstName: [
      {
        type: 'required', message: 'First Name is Required'
      }
    ],
    phoneNumber : [
      {
        type : 'required', message: 'Phone Number is Required'
      },
      {
        type : 'pattern' , message: 'Please Enter a Valid Mobile Number'
      }
    ]
  }

  constructor(
    private loginService: LoginService,
    private _fb: FormBuilder,
    private commonRequestService: CommonRequestService,
    private toastr:ToastrService,
    private router:Router
  ) {
    super();
    this.initializeForm();
  }



  signup(value: any) {

    const requestPayload = { ...value };
    this.commonRequestService
      .request(RequestEnums.SIGNUP, requestPayload)
      .subscribe((response) =>{
        this.toastr.success(CommonMessages.SIGNUP_SUCESS);
        this.router.navigate(['/auth/login']);
      })
  }


  /**
     * Function to initialize the form
     */
  initializeForm() {
    this.signUpForm = new FormGroup({
      first_name: new FormControl('', [
        Validators.required]),
      last_name: new FormControl('', [
        Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        CustomValidators.noWhitespaceValidator,
      ]),
      password: new FormControl('', [
        Validators.required, Validators.maxLength(100)]),
      phone_number: new FormControl('', [
        Validators.required, Validators.maxLength(13)]),
      user_type: new FormControl('3'),
      google_login_id: new FormControl(''),
      google_login_status: new FormControl('0'),
      facebook_login_id: new FormControl(''),
      facebook_login_status: new FormControl('0'),
      remember_me: new FormControl('0'),
      status: new FormControl('0')
    });
  }
}
