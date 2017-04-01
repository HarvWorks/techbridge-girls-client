import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from '../../../services/http.service';
import { SessionService } from '../../../services/session.service';
import { SocketService } from '../../../services/socket.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit, OnDestroy {
  private OnSent;

  constructor(
    private http: HttpService,
    private router: Router,
    private session: SessionService,
    private socket: SocketService,
  ) { }

  ngOnInit() {
    this.OnSent = this.socket.onSent.subscribe(() => {
      // Do something with message events here:
    });
  }

  ngOnDestroy() {
    this.OnSent.unsubscribe();
  }

}