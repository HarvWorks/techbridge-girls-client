import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { MakerLoginComponent } from './components/maker-login/maker-login.component';
import { MakerRegisterComponent } from './components/maker-register/maker-register.component';
import { SupplierLoginComponent } from './components/supplier-login/supplier-login.component';
import { SupplierRegisterComponent } from './components/supplier-register/supplier-register.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './modules/auth.module';

import { AuthGuardService } from './services/auth-guard.service';
import { SessionService } from './services/session.service';
import { SocketService } from './services/socket.service';
import { SuppliersService } from './services/suppliers.service';
import { HttpService } from './services/http.service';

@NgModule({
  imports: [
    AuthModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    // SupplierModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    IndexComponent,
    MakerLoginComponent,
    MakerRegisterComponent,
    SupplierLoginComponent,
    SupplierRegisterComponent
  ],
  providers: [
    AuthGuardService,
    HttpService,
    SessionService,
    SocketService,
    SuppliersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('app module')
  }
}