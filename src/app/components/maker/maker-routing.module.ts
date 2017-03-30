import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { ProgressComponent } from './progress/progress.component';
import { RegisterComponent } from './register/register.component';
import { MakerComponent } from './maker.component';

import { AuthGuardService } from '../../services/auth-guard.service';

const makerRoutes: Routes = [
  {
    path: '',
    component: MakerComponent,
    children: [
      {
        path: '',
        canActivateChild: [AuthGuardService],
        children: [
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent },
          { path: '', redirectTo: 'login' }
        ]
      },
      {
        path: '',
        component: HeaderComponent,
        // canActivateChild: [AuthGuardService],
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'messages', component: MessagesComponent },
          { path: 'profile', component: ProfileComponent },
          { path: 'progress', component: ProgressComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(makerRoutes)],
  exports: [RouterModule]
})
export class MakerRoutingModule { }