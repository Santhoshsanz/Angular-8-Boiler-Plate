import { SharedModule } from './../../../shared/module/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginForgotRoutingModule } from './login-forgot-routing.module';
import { LoginForgotComponent } from './login-forgot/login-forgot.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LoginForgotModule { }
