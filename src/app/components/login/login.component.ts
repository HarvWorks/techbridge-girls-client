import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user = {};

  constructor(
    private location: Location,
    private router: Router,
    private usersService: UsersService
  ) {}

  back(): void {
    this.location.back();
  }

  login(): void {
    this.usersService.login(this.user)
    .then(data => {
      this.router.navigate(['/dashboard']);
    })
    .catch(err => {
      console.log(err)
    })
  }

}