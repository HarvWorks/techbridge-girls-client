import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Cookie } from 'ng2-cookies';

import { MakersService } from '../../services/makers.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-maker-register',
  templateUrl: './maker-register.component.html'
})
export class MakerRegisterComponent implements OnInit {

  maker = { type: 0 };

  constructor(
    private location: Location,
    private makersService: MakersService,
    private router: Router,
    private session: SessionService
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

  register(): void {
    this.makersService.register(this.maker)
      .then(anvyl_token => {
        Cookie.set('anvyl_token', anvyl_token);
        this.session.setSession();
        this.router.navigate(['maker/dashboard'])
      })
      .catch(error => {

      })
  }

}