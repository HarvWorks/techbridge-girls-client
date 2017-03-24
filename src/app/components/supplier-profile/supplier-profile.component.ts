import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../services/session.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-supplier-profile',
  templateUrl: './supplier-profile.component.html',
  styleUrls: ['./supplier-profile.component.css']
})
export class SupplierProfileComponent implements OnInit {
  private user = {};

  constructor(
    private router: Router,
    private session: SessionService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    if (this.session.type !== 1)
      this.router.navigate(['']);
    else {
      this.usersService.show(this.session.id)
        .then(user => this.user = user)
        .catch(error => console.log(error));
    }
  }
}
