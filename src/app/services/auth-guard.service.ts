import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, CanActivateChild,
  CanLoad, Router, RouterStateSnapshot
} from '@angular/router';

import { JwtHelper } from 'angular2-jwt';
import { Cookie } from 'ng2-cookies';

import { SessionService } from './session.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  private jwtHelper: JwtHelper = new JwtHelper();

  constructor(
    private router: Router,
    private session: SessionService
  ) { }

  canActivate(): boolean {
    const anvyl_token = Cookie.get('anvyl_token');

    if (anvyl_token && this.jwtHelper.isTokenExpired(anvyl_token)) {
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
    const anvyl_token = Cookie.get('anvyl_token');
    const url: string = state.url;

    if ((url.includes('login') || url.includes('register'))) {
      if (this.session.type === 0) {
        this.router.navigate(['/maker/dashboard']);
        return false;
      } else if (this.session.type === 1) {
        this.router.navigate(['/supplier/dashboard']);
        return false;
      } else
        return true;
    } else if (anvyl_token && !this.jwtHelper.isTokenExpired(anvyl_token)) {
      if (url.includes('maker') && this.session.type === 0)
        return true;
      else if (url.includes('supplier') && this.session.type === 1)
        return true;
      else {
        this.router.navigate(['']);
        return false;
      }
    } else if (anvyl_token && this.jwtHelper.isTokenExpired(anvyl_token)) {
      this.session.logout();
      return false;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }

}