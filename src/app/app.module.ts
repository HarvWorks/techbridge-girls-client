import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './modules/app-routing.module';
import { AuthModule } from './modules/auth.module';

import { AppComponent } from './components/app/app.component';
import { IndexComponent } from './components/index/index.component';
import { MakerDashboardComponent } from './components/maker-dashboard/maker-dashboard.component';
import { MakerHeaderComponent } from './components/maker-header/maker-header.component';
import { MakerLoginComponent } from './components/maker-login/maker-login.component';
import { MakerMessagesComponent } from './components/maker-messages/maker-messages.component';
import { MakerProfileComponent } from './components/maker-profile/maker-profile.component';
import { MakerProgressComponent } from './components/maker-progress/maker-progress.component';
import { MakerRegisterComponent } from './components/maker-register/maker-register.component';
import { SupplierDashboardComponent } from './components/supplier-dashboard/supplier-dashboard.component';
import { SupplierHeaderComponent } from './components/supplier-header/supplier-header.component';
import { SupplierLoginComponent } from './components/supplier-login/supplier-login.component';
import { SupplierMessagesComponent } from './components/supplier-messages/supplier-messages.component';
import { SupplierProfileComponent } from './components/supplier-profile/supplier-profile.component';
import { SupplierProgressComponent } from './components/supplier-progress/supplier-progress.component';
import { SupplierRegisterComponent } from './components/supplier-register/supplier-register.component';

import { HttpService } from './services/http.service';
import { MakersService } from './services/makers.service';
import { SessionService } from './services/session.service';
import { SocketService } from './services/socket.service';
import { SuppliersService } from './services/suppliers.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MakerDashboardComponent,
    MakerHeaderComponent,
    MakerLoginComponent,
    MakerMessagesComponent,
    MakerProfileComponent,
    MakerProgressComponent,
    MakerRegisterComponent,
    SupplierDashboardComponent,
    SupplierHeaderComponent,
    SupplierLoginComponent,
    SupplierMessagesComponent,
    SupplierProfileComponent,
    SupplierProgressComponent,
    SupplierRegisterComponent
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService, MakersService, SessionService, SocketService, SuppliersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
