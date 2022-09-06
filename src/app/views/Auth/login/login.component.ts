import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/core/lib/authentication/local-storage.service';
import { AppTokens, CommonMessages } from 'src/app/shared/constants/constants/common-constants';
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
  password = 'password';
  show = false;
  constructor(
    private loginService: LoginService,
    private _fb: FormBuilder,
    private commonRequestService: CommonRequestService,
    private toastr: ToastrService,
    private localStorageService: LocalStorageService,
    private _router: Router
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
        if (
          !response ||
          !response.hasOwnProperty('token') ||
          response['token'] === ''
        ) {
          this.toastr.error(CommonMessages.INVALID_TOKEN);
          return;
        } else {
          this.toastr.success(CommonMessages.LOGIN_SUCESS);
          this.localStorageService.setItem(
            AppTokens.ACCESS_TOKEN,
            response['token']
          );
          this._router.navigate(['/dashboard']);
          // this.localStorageService.setItem(
          //   AppTokens.REFRESH_TOKEN,
          //   response['RefreshToken']
          // );
          // this.authSharedService.getAuthUser().subscribe((menus) => {
          // this._router.navigate(['/dashboard']);
          // });
        }
      });
  }

  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
}
