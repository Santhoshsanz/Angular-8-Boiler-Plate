import { LoginForgotComponent } from './login-forgot/login-forgot/login-forgot.component';
import { LoginComponent } from './login/login/login.component';
import { SharedModule } from './../../shared/module/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';


@NgModule({
  declarations: [
    LoginLayoutComponent,
    PrivacyPolicyComponent,
    LoginComponent,
    LoginForgotComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
