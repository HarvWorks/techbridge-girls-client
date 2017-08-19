import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { IndexComponent } from './index/index.component';

import { MonicallRoutingModule } from './monicall-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MonicallRoutingModule
  ],
  declarations: [
    IndexComponent,
  ]
})
export class MonicallModule { }