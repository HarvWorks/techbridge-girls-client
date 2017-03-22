import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if (!Cookie.get('anvyl_token'))
      this.router.navigate(['']);
  }
}
