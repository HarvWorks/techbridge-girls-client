import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { MakerLoginComponent } from './components/maker-login/maker-login.component';
import { SupplierLoginComponent } from './components/supplier-login/supplier-login.component';
import { MakerRegisterComponent } from './components/maker-register/maker-register.component';
import { SupplierRegisterComponent } from './components/supplier-register/supplier-register.component';

import { AuthGuardService } from './services/auth-guard.service';
import { MakerGuardService } from './services/maker-guard.service';
import { SupplierGuardService } from './services/supplier-guard.service';

const routes: Routes = [
	{ path: 'maker/login', component: MakerLoginComponent },
	{ path: 'maker/register', component: SupplierLoginComponent },
	{ path: 'supplier/login', component: SupplierLoginComponent },
	{ path: 'supplier/register', component: SupplierRegisterComponent },
	{ path: 'maker', loadChildren: './components/maker/maker.module#MakerModule' },
	{ path: 'supplier', loadChildren: './components/supplier/supplier.module#SupplierModule' },
	{ path: '', component: IndexComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }