import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { HttpService } from '../../../services/http.service';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-volunteer-signature',
  templateUrl: './volunteer-signature.component.html'
})
export class VolunteerSignatureComponent implements OnInit {

  parent = {};

  constructor(
    private http: HttpService,
    private location: Location,
    private router: Router,
    private session: SessionService
  ) { }

  ngOnInit() {
    console.log('sending volunteer signature')
    this.http.get('/volunteer-signature')
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
}