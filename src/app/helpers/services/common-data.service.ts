import { AuthenticationService } from './../authentication.service';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClientModule, HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
declare let moment: any;

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {
  eventEmitterData = new EventEmitter<any>();
  notifyEvent = new EventEmitter<any>();
  sensorEvent = new EventEmitter<any>();
  filterEvent = new EventEmitter<any>();
  aqiEvent = new EventEmitter<any>();
  radarEvent = new EventEmitter<any>();
  interactionEvents = new EventEmitter<any>();
  flyEvent = new EventEmitter<any>();
  sensorListEvent = new EventEmitter<any>();
  sensorStatusEvent = new EventEmitter<any>();
  constructor(private _http: HttpClient, private _authService: AuthenticationService) { }
  postData(body: any, url: string, headers?: HttpHeaders) {
    headers = headers.append('content-type', 'application/json');
    headers = headers.append('iop-userid', this._authService.getUserEmail());
    headers = headers.append('tz-id', Intl.DateTimeFormat().resolvedOptions().timeZone);
    return this._http.post(url, body, { headers });
  }
  postDataNoHeader(body: any, url: string, headers: HttpHeaders) {
    return this._http.post(url, body, { headers });
  }
  getData(url: string, headers: HttpHeaders): Observable<any> {
    // let newHeaders:HttpHeaders;
    headers = headers.append('iop-userid', this._authService.getUserEmail());
    headers = headers.append('tz-id', Intl.DateTimeFormat().resolvedOptions().timeZone);
    // console.log(headers);
    return this._http.get(url, { headers });
  }
  deleteData(url, id) {
    return this._http.delete(url + id);
  }
  getNormalHttpData(url) {
    return this._http.get(url);
  }
  postDataOnlyIOPHeader(body: any, url: string, headers?: HttpHeaders) {
    headers = headers.append('iop-userid', this._authService.getUserEmail());
    headers = headers.append('tz-id', Intl.DateTimeFormat().resolvedOptions().timeZone);
    return this._http.post(url, body, { headers });
  }
}
