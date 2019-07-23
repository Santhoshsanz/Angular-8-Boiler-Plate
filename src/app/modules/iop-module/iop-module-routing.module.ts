import { DashboardLayoutComponent } from './dashboard/dashboard-layout/dashboard-layout.component';
import { AuthGuard } from './../../helpers/auth-guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'home',
  component: DashboardLayoutComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: '',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IopModuleRoutingModule { }
