import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Cookie } from 'ng2-cookies';

import { SocketService } from './socket.service';

@Injectable()
export class SessionService {
  private _id: string;
  private _type: number;
  private _company: string;
  private _contact: string;
  private _picture: string;
  private _created_at: string;
  
  private onAccepted;

  constructor(
    private location: Location,
    private router: Router,
    private socket: SocketService
  ) {
    console.log('session constructed');
  }

  get id(): string { return this._id }
  get type(): number { return this._type }
  get company(): string { return this._company }
  get contact(): string { return this._contact }
  get picture(): string { return this._picture }
  get created_at(): string { return this._created_at }

  logout(relocate = true): void {
    // Disconnect sockets:
    this.socket.disconnect();

    // Clear user information:
    this._id = null;
    this._type = null;
    this._company = null;
    this._contact = null;
    this._picture = null;
    this._created_at = null;

    // Clear cookies:
    Cookie.deleteAll();

    // Navigate to index:
    if (relocate)
      this.router.navigate(['']);
  }

  setSession(): void {
    console.log('setting session');
    try {
      // Parse paylod from token:
      const payload = JSON.parse(window.atob(Cookie.get('anvyl_token').split('.')[1]
        .replace('-', '+').replace('_', '/')));

      // Set user information:
      this._id = payload.id;
      this._type = payload.type;
      this._company = payload.company;
      this._contact = payload.contact;
      this._picture = payload.picture;
      this._created_at = payload.created_at;

      // Set notifications:

      // Load google charts:

      //  Connect to sockets:
      this.socket.connect(this.type, this.id);
    } catch (error) {
      console.log(error);
      this.logout();
    }
  }

}
