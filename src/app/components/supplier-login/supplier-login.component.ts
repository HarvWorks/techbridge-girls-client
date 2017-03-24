import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Cookie } from 'ng2-cookies';

import { SessionService } from '../../services/session.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-supplier-login',
  templateUrl: './supplier-login.component.html',
  styleUrls: ['./supplier-login.component.css']
})
export class SupplierLoginComponent implements OnInit {

  user = { type: 1 };

  constructor(
    private location: Location,
    private router: Router,
    private session: SessionService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    if (this.session.type === 0)
      this.router.navigate(['maker/dashboard']);
    else if (this.session.type === 1)
      this.router.navigate(['supplier/dashboard']);
  }

  back(): void {
    this.location.back();
  }

  login(): void {
    this.usersService.login(this.user)
      .then(anvyl_token => {
        Cookie.set('anvyl_token', anvyl_token);
        this.session.setSession(false);
        this.router.navigate(['supplier/dashboard'])
      })
      .catch(error => {

      })
  }

}