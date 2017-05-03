import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html'
})
export class DonateComponent { 

  constructor(
    private http: HttpService
  ) {

  }

  donate(): void {
    console.log('pressed');
    this.http.post('/donate', {amount: '10.00'})
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
}