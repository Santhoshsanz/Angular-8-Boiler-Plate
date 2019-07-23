import { AuthenticationService } from './../../helpers/authentication.service';
import { CommonDataService } from './../../helpers/services/common-data.service';
import { apiData } from './../../common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private _route: Router,
    private _http: HttpClient,
    private _commonDataService: CommonDataService,
    private _auth: AuthenticationService) { }

  showLogin(url) {
    this._route.navigate(['./', url]);
  }

  getAuth(loginVal: any) {
    return this._auth.login(loginVal);
  }

  login(loginVal:UserModule.Login) {
    return this._http.post(apiData.url + apiData.login, loginVal);
  }

  logOut(userEmail: any) {
    return this._http.get(apiData.url + apiData.logout + userEmail + apiData.webLogin);
  }

  loginForgot(email): Observable<any> {
    const headers = new HttpHeaders();
    return new Observable(observer => {
      this._commonDataService.postDataNoHeader(email, apiData.url + apiData.loginForgot, headers).subscribe((res: any) => {
        if (res.status === 'ok') {
          observer.next(res.status);
          observer.complete();
        }
      }, error => {
        throw new Error(JSON.stringify(error));
      });
    });
  }

  getUser(email): Observable<any> {
    const headers = new HttpHeaders();
    return new Observable(observer => {
      this._commonDataService.getData(apiData.url + apiData.user + email, headers).subscribe((res: any) => {
        if (res.status === 'ok') {
          observer.next(res);
          observer.complete();
        }
      }, error => {
        throw new Error(JSON.stringify(error));
      });
    });
  }

}
