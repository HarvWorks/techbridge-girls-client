import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Cookie } from 'ng2-cookies';
import { JwtHelper } from 'angular2-jwt';

import { SocketService } from './socket.service';

@Injectable()
export class SessionService {
  private _id: string;
  private _type: number;
  private _company: string;
  private _contact: string;
  private _picture: string;
  private _created_at: string;

  private jwtHelper: JwtHelper = new JwtHelper();
  private onAccepted;

  constructor(
    private router: Router,
    private socket: SocketService
  ) { }

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
    try {
      // Parse paylod from token:
      const payload = this.jwtHelper.decodeToken(Cookie.get('anvyl_token'));

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
      this.socket.connect(this._type, this._id);
    } catch (error) {
      this.logout();
    }
  }

}
