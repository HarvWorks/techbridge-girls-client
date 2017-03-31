import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './modules/auth.module';

import { AuthGuardService } from './services/auth-guard.service';
import { HttpService } from './services/http.service';
import { SessionService } from './services/session.service';
import { SocketService } from './services/socket.service';

@NgModule({
  imports: [
    AuthModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    IndexComponent
  ],
  providers: [
    AuthGuardService,
    HttpService,
    SessionService,
    SocketService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }