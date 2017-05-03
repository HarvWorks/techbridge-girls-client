import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { DonateComponent } from './donate/donate.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { RegisterSignatureComponent } from './register-signature/register-signature.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { VolunteerSignatureComponent } from './volunteer-signature/volunteer-signature.component';

import { TechbridgeGirlsRoutingModule } from './techbridge-girls-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TechbridgeGirlsRoutingModule
  ],
  declarations: [
    AboutComponent,
    DonateComponent,
    IndexComponent,
    RegisterComponent,
    RegisterSignatureComponent,
    VolunteerComponent,
    VolunteerSignatureComponent
  ]
})
export class TechbridgeGirlsModule { }