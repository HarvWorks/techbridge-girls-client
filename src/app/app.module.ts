import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './modules/app-routing.module';
import { AuthModule } from './modules/auth.module';

import { AppComponent } from './components/app/app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProgressComponent } from './components/progress/progress.component';
import { RegisterMakerComponent } from './components/register-maker/register-maker.component';
import { RegisterSupplierComponent } from './components/register-supplier/register-supplier.component';

import { HttpService } from './services/http.service';
import { UsersService } from './services/users.service';
import { SessionService } from './services/session.service';
import { SocketService } from './services/socket.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    IndexComponent,
    LoginComponent,
    MessagesComponent,
    ProfileComponent,
    ProgressComponent,
    RegisterSupplierComponent,
    RegisterMakerComponent,
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService, UsersService, SessionService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
