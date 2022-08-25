import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public static readonly ACCESS_TOKEN_KEY = 'token';
  // --------------------------------------------------------------------------------------------------------

  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedIn.asObservable();
  redirectUrl: string = '';

  constructor(
    private router: Router,
    private _storageService: LocalStorageService
  ) {}

  login(): Observable<boolean> {
    const isToken = this._storageService.getItem(AuthenticationService.ACCESS_TOKEN_KEY) ? true : false;
    this.isLoggedIn.next(isToken);
    return this.isLoggedIn$;
  }

  logout(): Observable<boolean> {
    this.isLoggedIn.next(false);
    return this.isLoggedIn$;
  }
}
