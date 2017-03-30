import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../../services/session.service';
import { MakersService } from '../../../services/makers.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  private user = {};

  constructor(
    private router: Router,
    private session: SessionService,
    private makersService: MakersService
  ) { }

  ngOnInit() {
    this.makersService.show(this.session.id)
      .then(user => this.user = user)
      .catch(error => console.log(error));
  }
}
