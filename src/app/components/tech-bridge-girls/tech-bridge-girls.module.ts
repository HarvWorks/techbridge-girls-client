import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { DonateComponent } from './donate/donate.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { VolunteerComponent } from './volunteer/volunteer.component';

import { TechBridgeGirlsRoutingModule } from './tech-bridge-girls-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TechBridgeGirlsRoutingModule
  ],
  declarations: [
    DonateComponent,
    IndexComponent,
    RegisterComponent,
    VolunteerComponent
  ]
})
export class TechBridgeGirlsModule { }