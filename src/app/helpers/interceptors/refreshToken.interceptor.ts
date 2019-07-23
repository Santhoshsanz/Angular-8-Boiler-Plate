import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse, HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';
import { RefreshTokenService } from './refreshToken.Service';
import { apiData } from './../../common';
const AUTHORIZE_URL = apiData.UASTokenUrl;
const LOGIN_URL = apiData.url + apiData.login;
const urlList = [AUTHORIZE_URL, LOGIN_URL, 'https://maps.googleapis.com/maps/api/timezone/'];
@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {

  constructor(private injector: Injector, private _authService: AuthenticationService, private tokenService: RefreshTokenService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): any {
    const _auth = this.injector.get(AuthenticationService);
    if (!_auth.hasAuthorization() && _auth.hasAuthorizationRefresh()
      && !this.tokenService.processing && !this.noAUthRequired(request.url)) {
      return _auth.refreshToken().pipe(
        mergeMap(
          (res: any) => {
            _auth.saveTokens(res);
            this.tokenService.publish(res);
            this.tokenService.processing = false;
            return next.handle(request);
          }
        ), catchError((error: any) => {
          this.tokenService.publish({});
          this.tokenService.processing = false;
          return next.handle(request);
        }));
    } else if (request.url === AUTHORIZE_URL || request.url === LOGIN_URL) {
      return next.handle(request);
    }
    else
      if (this.tokenService.processing) {
        return this.tokenService.storage.pipe(mergeMap(
          () => {
            return next.handle(request);
          }
        ));
      } else {
        return next.handle(request);
      }
  }
  googleTimeZone(request) {
    let index = request.url.indexOf("maps.googleapis.com/maps/api/timezone/");
    if (index == -1) {
      return true
    }
    if (index >= 0) {
      return false
    }
  }
  noAUthRequired(url): boolean {
    var flag = false;
    urlList.map(function (e) {
      if (url.indexOf(e) != -1) {
        flag = true;
      }
    })
    return flag;
  }
}
