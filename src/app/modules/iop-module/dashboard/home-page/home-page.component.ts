import { AuthenticationService } from './../../../../helpers/authentication.service';
import { LoginService } from './../../../login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private _loginService: LoginService,
    private _authService: AuthenticationService) { }

  ngOnInit() {
  }
  signout() {
    this._loginService.logOut(this._authService.getUserEmail()).subscribe((res: any) => {
      if (res.status == "ok") {
        this._authService.loggedOut();
      }
    }, error => {
      this._authService.loggedOut();
      throw new Error(error);

    })
  }
}
