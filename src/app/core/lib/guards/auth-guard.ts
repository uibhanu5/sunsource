import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "../authentication/authentication.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private loggedInService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    let url: string = state.url;
    return this.loggedInService.isLoggedIn$;
  }

  checkLogin(url: string): Observable<boolean> {
    /* if (this.loggedInService.isLoggedIn) {
      return true;
    } else {
      this.loggedInService.redirectUrl = url;
      return false;
    } */
    return this.loggedInService.isLoggedIn$;
  }
}
