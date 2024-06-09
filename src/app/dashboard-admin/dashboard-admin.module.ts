import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAdminRoutingModule } from './dashboard-admin-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    DashboardAdminRoutingModule
  ]
})
export class DashboardAdminModule { }
