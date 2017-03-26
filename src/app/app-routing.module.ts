import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { TestComponent } from './test/test.component';

import { AuthGuardService } from './services/auth-guard.service';
import { MakerGuardService } from './services/maker-guard.service';
import { SupplierGuardService } from './services/supplier-guard.service';

const routes: Routes = [
	// { path: 'maker', loadChildren: 'components/maker/maker.module#MakerModule', canLoad: [MakerGuardService] },
	{ path: 'supplier', loadChildren: './components/supplier/supplier.module#SupplierModule' },
	{ path: 'test', component: TestComponent },
	{ path: '', component: IndexComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }