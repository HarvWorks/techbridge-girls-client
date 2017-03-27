import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Cookie } from 'ng2-cookies';

import { SessionService } from '../../services/session.service';
import { MakersService } from '../../services/makers.service';

@Component({
  selector: 'app-maker-login',
  templateUrl: './maker-login.component.html'
})
export class MakerLoginComponent implements OnInit {

  maker = {};

  constructor(
    private location: Location,
    private makersService: MakersService,
    private router: Router,
    private session: SessionService,
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
    this.makersService.login(this.maker)
      .then(anvyl_token => {
        Cookie.set('anvyl_token', anvyl_token);
        this.session.setSession();
        this.router.navigate(['maker/dashboard'])
      })
      .catch(error => {

      })
  }

}