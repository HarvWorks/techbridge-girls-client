import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../../services/session.service';
import { SuppliersService } from '../../../services/suppliers.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  private user = {};

  constructor(
    private router: Router,
    private session: SessionService,
    private suppliersService: SuppliersService
  ) { }

  ngOnInit() {
    if (this.session.type !== 1)
      this.router.navigate(['']);
    else {
      this.suppliersService.show(this.session.id)
        .then(user => this.user = user)
        .catch(error => console.log(error));
    }
  }
}
