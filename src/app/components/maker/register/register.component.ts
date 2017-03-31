import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Cookie } from 'ng2-cookies';

import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  maker = { type: 0 };

  constructor(
    private location: Location,
    private router: Router,
    private session: SessionService
  ) { }

  ngOnInit() { }

  back(): void {
    this.location.back();
  }

  register(): void {
    this.session.register(this.maker)
      .then(() => {
        this.router.navigate(['maker/dashboard'])
      })
      .catch(error => {
        console.log(error)
      })
  }

}