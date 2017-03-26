import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Cookie } from 'ng2-cookies';

// import { SessionService } from '../../../services/session.service';
// import { SuppliersService } from '../../../services/suppliers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  supplier = { type: 1 };

  constructor(
    private location: Location,
    private router: Router,
    // private session: SessionService,
    // private suppliersService: SuppliersService
  ) { }

  ngOnInit() {
    console.log('login')
    // if (this.session.type === 0)
    //   this.router.navigate(['maker/dashboard']);
    // else if (this.session.type === 1)
    //   this.router.navigate(['supplier/dashboard']);
  }

  back(): void {
    this.location.back();
  }

  login(): void {
    // this.suppliersService.login(this.supplier)
    //   .then(anvyl_token => {
    //     Cookie.set('anvyl_token', anvyl_token);
    //     this.session.setSession();
    //     this.router.navigate(['supplier/dashboard'])
    //   })
    //   .catch(error => {

    //   })
  }
}