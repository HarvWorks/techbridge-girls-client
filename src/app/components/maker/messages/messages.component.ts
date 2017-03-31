import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../../services/session.service';
import { SocketService } from '../../../services/socket.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit, OnDestroy {
  private OnSent;

  constructor(
    private router: Router,
    private session: SessionService,
    private socket: SocketService,
  ) { }

  ngOnInit() {
    this.OnSent = this.socket.onSent.subscribe(() => {

    });
  }

  ngOnDestroy() {
    this.OnSent.unsubscribe();
  }

}