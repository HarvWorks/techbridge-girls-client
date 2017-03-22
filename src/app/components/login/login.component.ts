import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Cookie } from 'ng2-cookies';

import { SessionService } from '../../services/session.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {};

  constructor(
    private location: Location,
    private router: Router,
    private session: SessionService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    if (Cookie.get('anvyl_token'))
      this.router.navigate(['dashboard']);
  }  
  
  back(): void {
    this.location.back();
  }

  login(): void {
    this.usersService.login(this.user)
    .then(anvyl_token => {
      Cookie.set('anvyl_token', anvyl_token);
      this.session.setSession(false);
      this.router.navigate(['dashboard'])
    })
    .catch(error => {
      
    })
  }

}