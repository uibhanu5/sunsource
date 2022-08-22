import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RequestEnums } from 'src/app/shared/constants/constants/request-enums';
import { CommonRequestService } from 'src/app/shared/services/http/common-request.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private _fb: FormBuilder,
    private commonRequestService: CommonRequestService
  ) {

   }

  ngOnInit(): void {
  }


  signup(value: any) {
    console.log(value);

    const requestPayload = { ...value };
    this.commonRequestService
      .request(RequestEnums.SIGNUP, requestPayload)
      .subscribe((response) => {
        console.log(response);
      });
  }

}
