import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RequestEnums } from 'src/app/shared/constants/constants/request-enums';
import { CustomValidators } from 'src/app/shared/services/common/validators';
import { CommonRequestService } from 'src/app/shared/services/http/common-request.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private loginService: LoginService,
    private _fb: FormBuilder,
    private commonRequestService: CommonRequestService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.initLoginForm();
  }

  public initLoginForm() {
    this.loginForm = this._fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          CustomValidators.noWhitespaceValidator,
        ],
      ],
      password: ['', [Validators.required, Validators.maxLength(100)]],
    });
  }

  login(value: any) {
    const requestPayload = { ...value };
    this.commonRequestService
      .request(RequestEnums.LOGIN, requestPayload)
      .subscribe((response) => {
        console.log(response);
        this.toastr.success(response['message']);
      });
  }
}
