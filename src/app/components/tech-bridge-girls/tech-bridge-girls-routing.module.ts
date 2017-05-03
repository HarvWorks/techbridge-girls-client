import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DonateComponent } from './donate/donate.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { VolunteerComponent } from './volunteer/volunteer.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'donate', component: DonateComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'volunteer', component: VolunteerComponent },
      { path: '', component: IndexComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechBridgeGirlsRoutingModule { }