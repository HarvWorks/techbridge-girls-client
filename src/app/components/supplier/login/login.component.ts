import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Cookie } from 'ng2-cookies';

import { SessionService } from '../../../services/session.service';
import { SuppliersService } from '../../../services/suppliers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  private supplier = {};

  constructor(
    private location: Location,
    private router: Router,
    private session: SessionService,
    private suppliersService: SuppliersService
  ) { }

  ngOnInit() {
    console.log('login')
  }

  back(): void {
    this.location.back();
  }

  login(): void {
    this.suppliersService.login(this.supplier)
      .then(anvyl_token => {
        console.log(anvyl_token)
        Cookie.set('anvyl_token', anvyl_token);
        this.session.setSession();
        this.router.navigate(['supplier/dashboard'])
      })
      .catch(error => {
        console.log(error)
      })
  }

}