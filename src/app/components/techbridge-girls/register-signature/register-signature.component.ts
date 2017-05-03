import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { HttpService } from '../../../services/http.service';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-register-signature',
  templateUrl: './register-signature.component.html'
})
export class RegisterSignatureComponent implements OnInit {

  parent = {};

  constructor(
    private http: HttpService,
    private location: Location,
    private router: Router,
    private session: SessionService
  ) { }

  ngOnInit() {
    console.log('sending register signature')
    this.http.get('/register-signature')
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
}