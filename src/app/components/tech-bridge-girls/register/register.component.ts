import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  supplier = { type: 1 };

  constructor(
    private location: Location,
    private router: Router,
    private session: SessionService
  ) { }

  ngOnInit() {
    console.log('register');
  }

  back(): void {
    this.location.back();
  }

  register(): void {
    this.session.register(this.supplier)
      .then(() => {
        this.router.navigate(['supplier/dashboard'])
      })
      .catch(error => {
        console.log(error)
      })
  }

}