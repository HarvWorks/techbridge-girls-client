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
import { MakerComponent } from './maker.component';

import { MakerRoutingModule } from './maker-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MakerRoutingModule
  ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    LoginComponent,
    MakerComponent,
    MessagesComponent,
    ProfileComponent,
    ProgressComponent,
    RegisterComponent
  ]
})
export class MakerModule {
  constructor(router: Router) {
    console.log('maker module')
  }
}