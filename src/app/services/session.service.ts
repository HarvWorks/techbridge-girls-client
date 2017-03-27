import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Cookie } from 'ng2-cookies';

import { SocketService } from './socket.service';

@Injectable()
export class SessionService {
  private onAccepted;

  id: string;
  type: number;
  company: string;
  contact: string;
  picture: string;
  created_at: string;

  constructor(
    private location: Location,
    private router: Router,
    private socket: SocketService
  ) { 
    console.log('session constructed');
    
  }

  logout(): void {
    // Disconnect sockets:
    this.socket.disconnect();

    // Clear user information:
    this.id = null;
    this.type = null;
    this.company = null;
    this.contact = null;
    this.picture = null;
    this.created_at = null;

    // Clear cookies:
    Cookie.deleteAll();

    // Navigate to index:
    this.router.navigate(['']);
  }

  setSession(): void {
    try {
      // Parse paylod from token:
      const payload = JSON.parse(window.atob(Cookie.get('anvyl_token').split('.')[1]
        .replace('-', '+').replace('_', '/')));

      // Set user information:
      this.id = payload.id;
      this.type = payload.type;
      this.company = payload.company;
      this.contact = payload.contact;
      this.picture = payload.picture;
      this.created_at = payload.created_at;

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
