import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "../authentication/authentication.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private _authenticationService: AuthenticationService,
    private router: Router
  ) {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if (this._authenticationService.login()) {
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }

  // checkLogin(url: string): Observable<boolean> {
  //   if (this.loggedInService.isLoggedIn) {
  //     return true;
  //   } else {
  //     this.loggedInService.redirectUrl = url;
  //     return false;
  //   }
  //   return this.loggedInService.isLoggedIn$;
  // }
}
