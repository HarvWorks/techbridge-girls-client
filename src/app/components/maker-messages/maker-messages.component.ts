import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-maker-messages',
  templateUrl: './maker-messages.component.html',
  styleUrls: ['./maker-messages.component.css']
})
export class MakerMessagesComponent implements OnInit {

  constructor(
    private router: Router,
    private session: SessionService
  ) { }

  ngOnInit() {
    if (this.session.type !== 0)
      this.router.navigate(['']);
  }
}