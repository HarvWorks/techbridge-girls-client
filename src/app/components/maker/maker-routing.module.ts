import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DashboardComponent } from './dashboard/dashboard.component';

const makerRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(makerRoutes)],
  exports: [RouterModule]
})
export class MakerRoutingModule { }