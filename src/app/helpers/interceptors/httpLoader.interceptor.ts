import { CommonDataService } from './../services/common-data.service';

import { throwError as observableThrowError, Observable, BehaviorSubject } from 'rxjs';
import { apiData } from './../../common';
import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';
import { catchError, finalize, map } from 'rxjs/operators';
import { HttpUserEvent } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HTTPStatus {
    private requestInFlight$: BehaviorSubject<boolean>;
    constructor() {
        this.requestInFlight$ = new BehaviorSubject(false);
    }

    setHttpStatus(inFlight: boolean) {
        this.requestInFlight$.next(inFlight);
    }

    getHttpStatus(): Observable<boolean> {
        return this.requestInFlight$.asObservable();
    }
}

@Injectable()
export class HTTPListener implements HttpInterceptor {
    fromLiveNotification: boolean = false;
    urlList = [apiData.url + apiData.mosquitoCount, apiData.url + apiData.oviSensor, apiData.url + apiData.spectraCount];
    constructor(private status: HTTPStatus,
        private _commonDataService: CommonDataService) {
        this._commonDataService.sensorEvent.subscribe((flag: string) => {
            this.fromLiveNotification = true;
        });
        this._commonDataService.eventEmitterData.subscribe((flag: string) => {
            this.fromLiveNotification = true;
        });
    }
    counter = [];
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<any> {
        if (!this.noAUthRequired(req.url)) {
            this.counter.push(req.url);
            if (!this.fromLiveNotification) {
                this.status.setHttpStatus(true);
            } else {
                this.status.setHttpStatus(false);
            }

        }
        return next.handle(req).pipe(
            map(event => {
                return event;
            }),
            catchError(error => {
                return observableThrowError(error);
            }),
            finalize(() => {
                // console.log(this.counter);
                if (!this.noAUthRequired(req.url)) {
                    this.counter.pop();
                }
                if (this.counter.length === 0) {
                    this.fromLiveNotification = false;
                    this.status.setHttpStatus(false);
                    // console.log(false);
                }
            })
        );
    }
    noAUthRequired(url): boolean {
        let flag = false;
        this.urlList.map(function (e) {
            if (url.indexOf(e) !== -1) {
                flag = true;
            }
        });
        // console.log(url + 'flag-' + !flag);
        return flag;
    }
}
