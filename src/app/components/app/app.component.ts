import { Component, OnInit } from '@angular/core';

import { Cookie } from 'ng2-cookies';

import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private session: SessionService
  ) { }

  ngOnInit() {
    if (Cookie.get('anvyl_token'))
      this.session.setSession(true);
  }

}