import { User } from './../classModel/user';
import { Injectable, Inject, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { Subject, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { apiData } from './../common';
import { RefreshTokenService } from './interceptors/refreshToken.Service';
import { Permissions } from './permission';
import { TranslateService } from '@ngx-translate/core';
// import { ThemeService } from '../shared/theme.service';

const KEY = 'key';
const USER = 'user';
const USERDETAIL = 'userDetail';
const TOKEN = 'TOKEN';
const REFRESH_TOKEN = 'REFRESH_TOKEN';
const jwtHelper: JwtHelperService = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  public user: User;
  public permission: Permissions;
  public tokenExpired: boolean = false;
  public refreshExpired: boolean = false;
  interactionEventsAuth = new EventEmitter<any>();
  constructor(private _route: Router,
    @Inject(SESSION_STORAGE) private _storage: StorageService,
    private _http: HttpClient,
    private _tokenPocessing: RefreshTokenService,
    private _translationService: TranslateService) {
  }
  startSession(tokenJson: any) {
    this.setUser(tokenJson);
  }
  endSession(user: any) {
    this.loggedOut();
  }
  superadmin() {
    if (this.getRole() === 'superadmin') {
      return true;
    }
    return false;
  }
  pmo() {
    if (this.getRole() === 'pmo' || this.getRole() === 'superadmin') {
      return true;
    }
    return false;
  }
  fieldTech() {
    if (this.getRole() === 'fieldtech') {
      return true;
    }
    return false;
  }
  client() {
    if (this.getRole() === 'client') {
      return true;
    }
    return false;
  }
  setUser(token) {
    const self = this;
    // console.log('Setting User');
    const user = jwtHelper.decodeToken(token.access_token);
    this.saveTokens(token);
    let headers = new HttpHeaders();
    headers = headers.append('iop-userid', user.user_name);
    this._http.get(apiData.url + apiData.oldUser + user.user_name + '/').subscribe((res: any) => {
      //  user.user_name
      if (res.status === 'ok') {
        self.setUserDetail(res);
      } else {
        // console.log('Failed in Submit User');
      }
    }, error => {
      throw new Error(JSON.stringify(error));
    });
    this.setPermission();
  }
  setUserDetail(res) {
    this.interactionEventsAuth.emit(res.user.language);
    this._translationService.use(res.user.language);
    const user = new User();
    user.email = res.user.email;
    user.firstName = res.user.firstName;
    user.lastName = res.user.lastName;
    user.role = res.user.role;
    user.userId = res.user.userId;
    user.image = res.user.image === null ? './assets/images/fieldtechs/alt.jpg' : res.user.image;
    user.theme = res.user.themeId;
    const headers = new HttpHeaders();
    // headers = headers.append('iop-userid', user.user_name);
    this._http.get(apiData.url + apiData.oldUser + user.email + '/', { headers }).subscribe((result: any) => {
      //  user.user_name
      if (result.status === 'ok') {
        // user.modules = result.user.roleDetail.modules;
        user.module = result.roleInfo.modules;
        this._storage.set(KEY, user.email);
        this._storage.set(USER, JSON.stringify(user));
        // console.log('Theme Set' + this.getTheme());
        this.redirect(user.role);
      }
    });
  }
  setPermission() {
    // switch (this.user.role) {
    //   case 'superadmin':
    //     this._permissionsService.loadPermissions(['PMO'])
    //     break;
    //   case 'pmo':
    //     this._permissionsService.loadPermissions(['PMO'])
    //     break;
    //   case 'fieldtech':
    //     this._permissionsService.loadPermissions(['FIELDTECH']);
    //     break;
    //   case 'client':
    //     this._permissionsService.loadPermissions(['CLIENT'])
    //     break;
    // }
    // console.log('Permission Added')
    // End
  }
  getComponentPermissions(module, component): Permissions {
    const modules = JSON.parse(this._storage.get(USER)).module;
    const returnVal = new Permissions();
    modules.map(function (e, x) {
      if (e.name.toLowerCase() === module.toLowerCase()) {
        e.components.map(function (a, b) {
          if (a.name.toLowerCase() === component.toLowerCase()) {
            a.allowPermissions.map(function (c, d) {
              returnVal[c.name] = c.status;
            });
          }
        });

      }
    });
    return returnVal;
  }
  getModulePermission(moduleName): boolean {
    const modules = JSON.parse(this._storage.get(USER)).module;
    let returnVal: boolean = false;
    modules.map(function (e, x) {
      if (e.name.toLowerCase() === moduleName.toLowerCase()) {
        returnVal = true;
      }
    });
    return returnVal;
  }
  redirect(role) {
    switch (role) {
      case 'superadmin':
        this._route.navigate(['./', 'home']);
        break;
      case 'pmo':
        this._route.navigate(['./', 'home']);
        break;
      case 'fieldtech':
        this._route.navigate(['./iop/home/', 'agent']);
        break;
      case 'SERVICETECHNICIAN':
        this._route.navigate(['./iop', 'agent']);
        break;
      default:
        this._route.navigate(['./', 'home']);
        break;
    }
  }
  getTrimmedEmail() {
    const name = this.getUserEmail();
    return name.substr(0, name.indexOf('@')).toLowerCase();
  }
  redirectUrl(url) {
    this._route.navigate(['./', url]);
  }
  getRole(): string {
    // console.log('Getting User Role'+JSON.parse(this._storage.get(USER)).role);
    return JSON.parse(this._storage.get(USER)).role;
  }
  getImage(): string {
    // console.log('Getting User Role'+JSON.parse(this._storage.get(USER)).role);
    return JSON.parse(this._storage.get(USER)).image;
  }
  // setImage(image) {
  //   this._storage.get(USER)
  // }
  getTheme(): string {
    // console.log('Getting User Role'+JSON.parse(this._storage.get(USER)).role);
    const theme = JSON.parse(this._storage.get(USER)).theme;
    if (theme === '' || theme === null || theme === undefined) {
      return 'calmicRed';
    }
    return theme;
  }
  setTheme(theme) {
    // console.log('Getting User Role'+JSON.parse(this._storage.get(USER)).role);
    const user = JSON.parse(this._storage.get(USER));
    user.theme = theme;
    this._storage.set(USER, JSON.stringify(user));
  }
  isLoggedIn(): boolean {
    // console.log('User Email');
    // console.log(this.user.email)
    if (this._storage.get(TOKEN) == null) {
      return false;
    } else {
      // console.log('Allow to Mission')
      // console.log(this._storage.get(KEY));
      return true;
    }
  }
  getUserEmail(): string {
    return this._storage.get(KEY);
  }
  getName() {
    return JSON.parse(this._storage.get(USER)).firstName.toUpperCase();
  }
  loggedOut() {
    // no-debugger;
    this._tokenPocessing.processing = false;
    this._storage.remove(KEY);
    this._storage.remove(USER);
    this._storage.remove(TOKEN);
    this._storage.remove(REFRESH_TOKEN);
    // this._permissionsService.flushPermissions();
    this._route.navigate(['./', 'login']);
  }
  getToken() {
    return this._storage.get(TOKEN);
  }
  customTokenExpiried(): boolean {
    // debugger;
    // let tokenExpTimeStamp=jwtHelper.decodeToken(this._storage.get(TOKEN)).exp
    // let tokenExpDate=new Date(tokenExpTimeStamp * 1000);
    // tokenExpDate.setSeconds(tokenExpDate.getSeconds()-10);
    // let now= new Date();
    // return tokenExpDate<now
    return jwtHelper.isTokenExpired(this._storage.get(TOKEN), 30);
  }

  customRefreshTokenExpiried(): boolean {
    return jwtHelper.isTokenExpired(this._storage.get(REFRESH_TOKEN), 30);
  }

  getHeaderAuthorization() {
    return 'Bearer ' + this.getToken();
  }
  hasAuthorization() {
    // console.log('Has Auth Called');
    if (this._storage.get(TOKEN) && !jwtHelper.isTokenExpired(this._storage.get(TOKEN), 30)) {
      return true;
    } else {
      return false;
    }
    //   false
  }
  hasToken() {
    if (this._storage.get(TOKEN)) {
      return true;
    } else {
      return false;
    }
  }
  hasAuthorizationRefresh() {
    // console.log('Has Refresh Auth Called')
    if (this._storage.get(REFRESH_TOKEN)) {
      return true;
    } else {
      return false;
    }
  }
  refreshToken(): Observable<any> {
    this._tokenPocessing.processing = true;
    // console.log('Refresh Token Called')
    // console.log('Refresh Token'+this.getRefreshToken())
    const body = new HttpParams()
      .set(`refresh_token`, this.getRefreshToken())
      .set(`grant_type`, 'refresh_token');

    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers = headers.append('Authorization', 'Basic Yi1vbmU6Yi1vbmU=');
    return new Observable(observer => {
      this._http.post(apiData.UASTokenUrl, body.toString(), { headers }).subscribe((res: any) => {
        if (res.access_token) {
          observer.next(res);
          observer.complete();
        }
      }, error => {
        // retry(2), error1 => {
        //   this.loggedOut();
      });
    });
  }
  saveTokens(token) {
    this.tokenExpired = false;
    this._storage.set(TOKEN, token.access_token);
    this._storage.set(REFRESH_TOKEN, token.refresh_token);
    // console.log('T '+token.access_token)
    //  console.log('R '+token.refresh_token)
  }
  getRefreshToken() {
    if (this._storage.get(REFRESH_TOKEN) && !jwtHelper.isTokenExpired(this._storage.get(REFRESH_TOKEN))) {
      return this._storage.get(REFRESH_TOKEN);
    } else {
      return false;
    }
  }
  login(loginVal) {
    // ParamData
    const body = new HttpParams()
      .set(`username`, loginVal.email)
      .set(`password`, loginVal.password)
      .set(`grant_type`, 'password');

    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers = headers.append('Authorization', 'Basic Yi1vbmU6Yi1vbmU=');
    // console.log(body.toString());
    return this._http.post(apiData.UASTokenUrl,
      body.toString(), { headers });
  }
  deleteToken() {
    // console.log('Token Expired')
    this.tokenExpired = true;
  }
  deleteRefreshToken() {
    // console.log('Rferesh Expired')
    this.refreshExpired = true;
  }
}
