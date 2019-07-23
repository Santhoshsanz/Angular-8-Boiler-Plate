
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginForgotComponent } from './login-forgot/login-forgot.component';

const routes: Routes = [{
  path: '',
  component: LoginForgotComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginForgotRoutingModule { }
