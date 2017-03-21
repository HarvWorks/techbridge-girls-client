import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterSupplierComponent } from './components/register-supplier/register-supplier.component';
import { RegisterMakerComponent } from './components/register-maker/register-maker.component';

const routes: Routes = [
	{ path: '', component: IndexComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'login',  component: LoginComponent },
	{ path: 'register-supplier',  component: RegisterSupplierComponent },
	{ path: 'register-maker',  component: RegisterMakerComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}