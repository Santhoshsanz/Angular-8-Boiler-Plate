import { environment } from './../../../../../environments/environment';
import { ThemeService } from './../../../../helpers/services/theme.service';
import { theme } from './../../../../classModel/themes';
import { AuthenticationService } from './../../../../helpers/authentication.service';
import { CommonDataService } from './../../../../helpers/services/common-data.service';
import { apiData } from './../../../../common';
import { Component, OnInit } from '@angular/core';
import { ToastrModule, ToastrService, ToastrConfig, Toast } from 'ngx-toastr';
import * as _ from 'lodash';
import { TranslateService } from '@ngx-translate/core';
// Live Queue
declare let SockJS: any;
declare let Stomp: any;


@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
  stompClient: any;
  sockJs = SockJS;
  userName: string;
  public subscription;
  notificationFlag: number;
  api = environment.url.siteUrl;
  constructor(private _toasterService: ToastrService,
    private _commonDataService: CommonDataService,
    private _authService: AuthenticationService,
    private _themeService: ThemeService,
    private _translateService: TranslateService) { }

  ngOnInit() {
  }
  themeChange(num) {
    this._themeService.changeTheme(_.keys(theme)[num])
  }
  popToast(type, sensorEvent, eventMessage, timer = 1000) {
    let options = {
      timeOut: timer,
      positionClass: 'toast-bottom-right'
    }
    switch (type) {
      case 'success':
        this._toasterService.success(sensorEvent, eventMessage, options);
        break;
      case 'error':
        this._toasterService.error(sensorEvent, eventMessage, options);
        break;
      case 'warning':
        this._toasterService.warning(sensorEvent, eventMessage, options);
        break;
      case 'info':
        this._toasterService.info(sensorEvent, eventMessage, options);
        break;
    }
  }
  initializeWebSocketConnection() {
    console.log('Init WebSocket');
    const ws = new WebSocket(apiData.serverUrl);
    this.stompClient = Stomp.over(ws);
    this.stompClient.debug = null;
    const that = this;
    this.stompClient.connect(apiData.socketuser, apiData.socketPassword, (frame) => {
      console.log('Stomp CLient Connected.....');

      that.subscription = that.stompClient.subscribe(this._authService.getTrimmedEmail(), (message) => {
        this.notificationFlag++;
        console.log('**************************************');
        console.log(message.body);
        console.log('**************************************');
        if (message.body) {
          // && this.notificationFlag < 5
          const temp = JSON.parse(message.body);
          // Check for user
          if (temp.userid === that._authService.getUserEmail()) {
            console.log('User Authorised for Notification');
            // let type = JSON.parse(temp.type);
            const type = temp.webSocketRequest;
            if (type.type === 'ACTIVITY') {
              // Update Events
              // that.getData();
              // Ends
              that._commonDataService.eventEmitterData.emit('Event');
              that.popToast('error', 'Event Activity', temp.msg);
            }

            if (type.type === 'CONFIG') {
              // Update Notification
              // that.getNewSensors();
              // Ends
              that._commonDataService.notifyEvent.emit('Notification');
              that.popToast('success', 'New Sensor Detected', temp.msg);
            }
            if (type.type === 'STATUS') {
              that._commonDataService.sensorEvent.emit('Notification');
              that.popToast('warning', 'Sensor Event', temp.msg);
            }
            if (type.type === 'SIGFOXFLY') {
              that._commonDataService.sensorEvent.emit('Notification');
              that.popToast('warning', 'Fly Event', temp.msg);
            }
            if (type.type === 'FLYDAYBREACH') {
              that._commonDataService.sensorEvent.emit('Notification');
              that.popToast('error', 'Fly Event', temp.msg);
              // 'Fly Day Breach'
            }
            if (type.type === 'FLYMONTHBREACH') {
              that._commonDataService.sensorEvent.emit('Notification');
              that.popToast('error', 'Fly Event', temp.msg);
            }
            if (type.type === 'GLUEBOARDEXPIRED') {
              that._commonDataService.sensorEvent.emit('Notification');
              that.popToast('error', 'Glueboard Expired', temp.msg);
            }
            if (type.type === 'IAQ_ACTIVITY') {
              that._commonDataService.aqiEvent.emit(temp.webSocketRequest);
              that.popToast('success', 'AQI', temp.msg);
            }
            if (type.type === 'NN' && type.flag === 'SIGFOX') {
              that._commonDataService.sensorStatusEvent.emit(temp.webSocketRequest);
              that.popToast('success', 'Sensor', temp.msg, 1500);
            }
          }
        } else {
          // Handle Time Out For Toaster Pop
        }

        // Handle Service for incoming Queue
        // if(message.body.type=='Activity')
        // debugger;


      });
    }, (error) => {
      // console.log('Retry Notification');
      const self = this;
      // self.stompFailureCallback(error);
    }, '/');
  }

  languageChange(lang) {
    this._translateService.use(lang)
  }
}
