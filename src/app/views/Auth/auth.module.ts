import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";
import { CommonRequestService } from "src/app/shared/services/http/common-request.service";
import SharedModule from "../../shared/shared.module";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { LoginService } from "./services/login.service";
import { SignupComponent } from "./sign-up/sign-up.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },{
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'sign-up',
        component: SignupComponent

      }
    ]
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [LoginComponent, SignupComponent, AuthComponent],
  exports: [RouterModule],
  providers: [LoginService],
})
export default class AuthModule {}