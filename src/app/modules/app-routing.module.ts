import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { IndexComponent } from '../components/index/index.component';
import { LoginComponent } from '../components/login/login.component';
import { MessagesComponent } from '../components/messages/messages.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { ProgressComponent } from '../components/progress/progress.component';
import { RegisterMakerComponent } from '../components/register-maker/register-maker.component';
import { RegisterSupplierComponent } from '../components/register-supplier/register-supplier.component';

const routes: Routes = [
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'login',  component: LoginComponent },
	{ path: 'messages',  component: MessagesComponent },
	{ path: 'profile',  component: ProfileComponent },
	{ path: 'progress',  component: ProgressComponent },
	{ path: 'register-supplier',  component: RegisterSupplierComponent },
	{ path: 'register-maker',  component: RegisterMakerComponent },
	{ path: '', component: IndexComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}