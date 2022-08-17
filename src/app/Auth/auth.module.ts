import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";
import SharedModule from "../shared.module";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./sign-up/sign-up.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LoginComponent,
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
]

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [LoginComponent, SignupComponent, AuthComponent],
  exports: [RouterModule]
})
export default class AuthModule { }