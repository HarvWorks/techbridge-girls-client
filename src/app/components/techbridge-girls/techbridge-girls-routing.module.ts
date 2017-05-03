import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DonateComponent } from './donate/donate.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { RegisterSignatureComponent } from './register-signature/register-signature.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { VolunteerSignatureComponent } from './volunteer-signature/volunteer-signature.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'donate', component: DonateComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'register-signature', component: RegisterSignatureComponent },
      { path: 'volunteer', component: VolunteerComponent },
      { path: 'volunteer-signature', component: VolunteerSignatureComponent },
      { path: 'about', component: AboutComponent },
      { path: '', component: IndexComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechbridgeGirlsRoutingModule { }