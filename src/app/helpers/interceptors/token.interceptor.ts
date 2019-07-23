import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { apiData } from './../../common';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { RefreshTokenService } from './refreshToken.Service';
import { tap } from 'rxjs/internal/operators/tap';
const AUTHORIZE_URL = apiData.UASTokenUrl;
const LOGIN_URL = apiData.url + apiData.login;
const urlList = [AUTHORIZE_URL, LOGIN_URL, 'https://maps.googleapis.com/maps/api/timezone/'];

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private injector: Injector, private _tokenService: RefreshTokenService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //  console.log('Token Interceptor' + request.url);
    const _auth = this.injector.get(AuthenticationService);
    let req = request;
    if (request.url !== AUTHORIZE_URL && request.url !== LOGIN_URL && !this.noAUthRequired(request.url)) {
      if (_auth.hasToken()) {
        // console.log('Has Authorization Token')
        req = request.clone({
          headers: request.headers.set('Authorization', _auth.getHeaderAuthorization())
        });
      }
    }


    return next.handle(req).pipe(tap(
      () => {
      },
      (error: any) => {
        // debugger;
        console.log('Error in Interceptor ');
        console.log(error);
        console.log('Req in Interceptor');
        console.log(req);
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            console.log('Errored 401')
            _auth.loggedOut();
          }
          if (error && error.status === 400 && error.error && error.error.error === 'invalid_grant') {
            console.log('Invalid Grant')
            if (error.error.error_description === 'Bad credentials') {
              console.log('Bad credentials')
            } else if (error.error.error_description === 'Invalid refresh token') {
              _auth.loggedOut();
            }
            if (this._tokenService.processing === true) {
              this._tokenService.processing = false;
            }
          }
        }
      }));
    // return next.handle(request);
  }
  noAUthRequired(url): boolean {
    let flag = false;
    urlList.map(function (e) {
      if (url.indexOf(e) !== -1) {
        flag = true;
      }
    });
    return flag;
  }

}

// .retryWhen(error => {
//   return error
//      .flatMap((error: any) => {
//         if(error.status  === 400 ||error.status  === 404 ||error.status  === 500 ) {
//           return Observable.of(error.status).delay(1000)
//         }
//         return Observable.throw({error: 'No retry'});
//      })
//      .take(2)
//      .concat(Observable.throw(error));
//   })
