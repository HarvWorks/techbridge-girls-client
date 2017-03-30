import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, CanActivateChild,
  CanLoad, Router, RouterStateSnapshot
} from '@angular/router';

import { tokenNotExpired } from 'angular2-jwt';

import { SessionService } from './session.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private session: SessionService
  ) { }

  canActivate(): boolean {
    if (!tokenNotExpired()) {
      this.session.logout(false);
      return true;
    } else if (this.session.type === 0) {
      this.router.navigate(['/maker/dashboard']);
      return false;
    } else if (this.session.type === 1) {
      this.router.navigate(['/supplier/dashboard']);
      return false;
    } else
      return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    console.log('url is:', url)

    if ((url.includes('login') || url.includes('register'))) {
      if (this.session.type === 0) {
        this.router.navigate(['/maker/dashboard']);
        return false;
      } else if (this.session.type === 1) {
        this.router.navigate(['/supplier/dashboard']);
        return false;
      } else
        return true;
    } else if (tokenNotExpired()) {
      if (url.includes('maker') && this.session.type === 0)
        return true;
      else if (url.includes('supplier') && this.session.type === 1)
        return true;
      else {
        this.router.navigate(['']);
        return false;
      }
    } else
      this.session.logout();
  }

}