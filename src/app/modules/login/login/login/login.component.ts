import { LoginService } from './../../login.service';
import { AuthenticationService } from './../../../../helpers/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: UserModule.Login = {
    email: '',
    password: ''
  }
  constructor(private _loginService: LoginService,
    private _authenticationService: AuthenticationService) { }

  ngOnInit() {

  }
  submit() {
    this._loginService.login(this.login).subscribe((res: any) => {
      if (res.status === 'ok') {
        this._loginService.getAuth(this.login).subscribe((res: any) => {
          if (res.access_token) {
            this._authenticationService.startSession(res);
          }
        });
      }
    });
  }
}
