import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { HttpService } from '../../../services/http.service';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  parent = {};

  constructor(
    private http: HttpService,
    private location: Location,
    private router: Router,
    private session: SessionService
  ) { }

  ngOnInit() {
    this.http.get('/request-signature')
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
}