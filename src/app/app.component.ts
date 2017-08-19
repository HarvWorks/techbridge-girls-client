import { Component, OnInit } from '@angular/core';

import { Cookie } from 'ng2-cookies';

import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(
    private session: SessionService
  ) { }

  ngOnInit() {
    // const anvyl_token: string = Cookie.get('anvyl_token');
    // if (anvyl_token)
    //   this.session.setSession(anvyl_token);
  }

}