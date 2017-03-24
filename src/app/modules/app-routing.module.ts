import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from '../components/index/index.component';
import { MakerDashboardComponent } from '../components/maker-dashboard/maker-dashboard.component';
import { MakerLoginComponent } from '../components/maker-login/maker-login.component';
import { MakerMessagesComponent } from '../components/maker-messages/maker-messages.component';
import { MakerProfileComponent } from '../components/maker-profile/maker-profile.component';
import { MakerProgressComponent } from '../components/maker-progress/maker-progress.component';
import { MakerRegisterComponent } from '../components/maker-register/maker-register.component';
import { SupplierDashboardComponent } from '../components/supplier-dashboard/supplier-dashboard.component';
import { SupplierLoginComponent } from '../components/supplier-login/supplier-login.component';
import { SupplierMessagesComponent } from '../components/supplier-messages/supplier-messages.component';
import { SupplierProfileComponent } from '../components/supplier-profile/supplier-profile.component';
import { SupplierProgressComponent } from '../components/supplier-progress/supplier-progress.component';
import { SupplierRegisterComponent } from '../components/supplier-register/supplier-register.component';

const routes: Routes = [
	{ path: 'maker/dashboard', component: MakerDashboardComponent },
	{ path: 'maker/login',  component: MakerLoginComponent },
	{ path: 'maker/messages',  component: MakerMessagesComponent },
	{ path: 'maker/profile',  component: MakerProfileComponent },
	{ path: 'maker/progress',  component: MakerProgressComponent },
	{ path: 'maker/register',  component: MakerRegisterComponent },
	{ path: 'supplier/dashboard', component: SupplierDashboardComponent },
	{ path: 'supplier/login',  component: SupplierLoginComponent },
	{ path: 'supplier/messages',  component: SupplierMessagesComponent },
	{ path: 'supplier/profile',  component: SupplierProfileComponent },
	{ path: 'supplier/progress',  component: SupplierProgressComponent },
	{ path: 'supplier/register',  component: SupplierRegisterComponent },
	{ path: '', component: IndexComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}