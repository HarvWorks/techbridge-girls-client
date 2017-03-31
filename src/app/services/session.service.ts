import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Cookie } from 'ng2-cookies';
import { JwtHelper } from 'angular2-jwt';

import { HttpService } from './http.service';
import { SocketService } from './socket.service';

@Injectable()
export class SessionService {
  private _company: string;
  private _contact: string;
  private _created_at: string;
  private _id: string;
  private _picture: string;
  private _tier: number;
  private _type: number;

  private jwtHelper: JwtHelper = new JwtHelper();
  private onAccepted;

  constructor(
    private http: HttpService,
    private router: Router,
    private socket: SocketService
  ) { }

  get company(): string { return this._company }
  get contact(): string { return this._contact }
  get created_at(): string { return this._created_at }
  get id(): string { return this._id }
  get picture(): string { return this._picture }
  get tier(): number { return this._tier }
  get type(): number { return this._type }

  login(data): Promise<any> {
    let user: string;
    if (data.type === 0)
      user = 'maker';
    else if (data.type === 1)
      user = 'supplier';
    else
      return Promise.reject('Invalid user type provided.');

    return this.http.post(`/${user}s/login`, data)
      .then(anvyl_token => {
        Cookie.set('anvyl_token', anvyl_token);
        this.setSession(Cookie.get('anvyl_token'));
      })
      .catch(error => Promise.reject(error))
  }

  logout(relocate = true): void {
    // Disconnect sockets:
    this.socket.disconnect();

    // Clear user information:
    this._company = null;
    this._contact = null;
    this._created_at = null;
    this._id = null;
    this._picture = null;
    this._tier = null;
    this._type = null;

    // Clear cookies:
    Cookie.deleteAll();

    // Navigate to index:
    if (relocate)
      this.router.navigate(['']);
  }

  register(data): Promise<any> {
    let user: string;
    if (data.type === 0)
      user = 'maker';
    else if (data.type === 1)
      user = 'supplier';
    else
      return Promise.reject('Invalid user type provided.');

    return this.http.post(`/${user}s/register`, data)
      .then(anvyl_token => {
        Cookie.set('anvyl_token', anvyl_token);
        this.setSession(Cookie.get('anvyl_token'));
      })
      .catch(error => Promise.reject(error))
  }

  setSession(anvyl_token: string): void {
    try {
      // Logout if session is expired:
      if (this.jwtHelper.isTokenExpired(anvyl_token)) {
        this.logout();
      } else {
        // Parse paylod from token:
        const payload = this.jwtHelper.decodeToken(anvyl_token);

        // Set user information:
        this._company = payload.company;
        this._contact = payload.contact;
        this._created_at = payload.created_at;
        this._id = payload.id;
        this._picture = payload.picture;
        this._tier = payload.tier;
        this._type = payload.type;

        // Set notifications:

        //  Connect to sockets:
        this.socket.connect(this._type, this._id);
      }
    } catch (error) {
      this.logout();
    }
  }

}
