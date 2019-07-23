import { LoginForgotComponent } from './login-forgot/login-forgot/login-forgot.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { LoginComponent } from './login/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [{
  path: 'login',
  component: LoginLayoutComponent,
  children: [
    {
      path: '',
      component: LoginComponent
    },
    {
      path: 'ForgotPassword',
      component: LoginForgotComponent
    },
    {
      path: 'PrivacyPolicy',
      component: PrivacyPolicyComponent
    }
  ]
},
{
  path: '',
  pathMatch: 'full',
  redirectTo: 'login'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
