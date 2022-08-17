import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  public static readonly ACCESS_TOKEN_KEY = 'accessToken';
  // --------------------------------------------------------------------------------------------------------

  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedIn.asObservable();
  redirectUrl: string = '';

  constructor(private router: Router) { }

  login(): Observable<boolean> {
    this.isLoggedIn.next(true);
    return this.isLoggedIn$;
  }

  logout(): Observable<boolean> {
    this.isLoggedIn.next(false);
    return this.isLoggedIn$;
  }
}
