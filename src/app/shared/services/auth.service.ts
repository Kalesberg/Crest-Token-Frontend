import { HttpService } from '../../http.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from './localStorage.service';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  public constructor(
    private _localStorageService: LocalStorageService,
    private _http: HttpService,
    private _store: Store<any>,
  ) { }

  public setPassword(passwordDataquery: PasswordData): Observable<boolean> {
    const password: string = passwordDataquery.password;
    return this._http.nonAuthorizedRequest('/reset/password/new', {...passwordDataquery, password});
  }

  public sendResetPasswordEmail(email: string): Observable<boolean> {
    return this._http.nonAuthorizedRequest('/reset/password', { email });
  }

  public checkPasswordHash(hash: string): Observable<{ isValidKey: boolean }> {
    return this._http.nonAuthorizedRequest('/reset/password/check', { hash });
  }

  public login(user: User): Observable<User | string> {
    const password: string = user.password;
    return this._http.nonAuthorizedRequest(`/auth/signin`, {...user, password});
  }

  public getCurrentUser(): Observable<User> {
    return this._http.authorizedRequest(`/account`, '', 'GET');
  }

  public signUp(user: User): Observable<User> {
    let referredBy = '';
    try {
      referredBy = this._localStorageService.getItem('referralHash');
    } catch (err) {
      console.log(err);
    }
    return this._http.nonAuthorizedRequest(`/auth/signup`, {...user, referredBy });
  }

  public tokenToLocalStorage(user: User): Observable<User | null> {
    if (!user || !user.accessToken) {
      return of(null);
    }
    this._localStorageService.setItem('token', user.accessToken);

    return of(user);
  }

  public removeFromLocalStorage(name: string): Observable<boolean> {
    this._localStorageService.removeItem(name);
    return of(true);
  }

  public recendVerificationEmail(username: string): Observable<any> {
    return this._http.nonAuthorizedRequest(`/email/verification/resend/${username}`, '', 'GET');
  }

}
