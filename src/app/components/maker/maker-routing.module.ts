import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { ProgressComponent } from './progress/progress.component';
import { MakerComponent } from './maker.component';

const makerRoutes: Routes = [
  {
    path: '',
    component: MakerComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'header', component: HeaderComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'maker', component: MakerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(makerRoutes)],
  exports: [RouterModule]
})
export class MakerRoutingModule { }