import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { ProgressComponent } from './progress/progress.component';
import { RegisterComponent } from './/register/register.component';
import { SupplierComponent } from './supplier.component';

import { SupplierRoutingModule } from './supplier-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SupplierRoutingModule
  ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    LoginComponent,
    MessagesComponent,
    ProfileComponent,
    ProgressComponent,
    RegisterComponent,
    SupplierComponent
  ]
})
export class SupplierModule {
  constructor(router: Router) {
    console.log('supplier module')
  }
}