import { Injectable } from '@angular/core';
import {
  CanActivate, CanLoad, Router
} from '@angular/router';

import { SessionService } from './session.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(
    private router: Router,
    private session: SessionService
  ) { }

  private isSession(): boolean {
    if (this.session.type === 0) {
      this.router.navigate['maker/dashboard'];
      return false;
    } else if (this.session.type === 1) {
      this.router.navigate['maker/dashboard'];
      return false;
    } else
      return true;
  }

  canActivate(): boolean {
    return this.isSession();

  }

  canLoad(): boolean {
    return this.isSession();
  }


}