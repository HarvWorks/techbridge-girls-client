import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { ProgressComponent } from './progress/progress.component';
import { SupplierComponent } from './supplier.component';

const supplierRoutes: Routes = [
  {
    path: '',
    component: SupplierComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'header', component: HeaderComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'supplier', component: SupplierComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(supplierRoutes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }