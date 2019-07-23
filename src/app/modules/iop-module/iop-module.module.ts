import { SharedModule } from './../../shared/module/shared/shared.module';
import { DashboardLayoutComponent } from './dashboard/dashboard-layout/dashboard-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IopModuleRoutingModule } from './iop-module-routing.module';


@NgModule({
  declarations: [DashboardLayoutComponent],
  imports: [
    CommonModule,
    IopModuleRoutingModule,
    SharedModule
  ]
})
export class IopModuleModule { }
