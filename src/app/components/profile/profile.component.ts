import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cookie } from 'ng2-cookies';

import { SessionService } from '../../services/session.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = {};

  constructor(
    private router: Router,
    private session: SessionService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    if (!Cookie.get('anvyl_token'))
      this.router.navigate(['']);
    else {
      this.usersService.show(this.session.id)
        .then(response => {
          console.log('response:', response);
          this.user = response
        })
        .catch(error => console.log(error));
    }
  }

}
