import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad,
  Route, Router, RouterStateSnapshot
} from '@angular/router';

import { SessionService } from './session.service';

@Injectable()
export class SupplierGuardService implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    private router: Router,
    private session: SessionService
  ) { }

  private isCorrectType(url: string): boolean {
    return this.session.type === 1 ? true : false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.session.type === 1 ? true : false;

  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.session.type === 1 ? true : false;
  }

  canLoad(route: Route): boolean {
    return this.session.type === 1 ? true : false;
  }

}