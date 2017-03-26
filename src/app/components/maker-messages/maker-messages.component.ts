import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../services/session.service';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-maker-messages',
  templateUrl: './maker-messages.component.html',
  styleUrls: ['./maker-messages.component.css']
})
export class MakerMessagesComponent implements OnInit {
  private OnSent;

  constructor(
    private router: Router,
    private session: SessionService,
    private socket: SocketService,
  ) { }

  ngOnInit() {
    if (this.session.type !== 1)
      this.router.navigate(['']);
    else {
      this.OnSent = this.socket.getOnSent().subscribe(() => {

      });
    }
  }

  ngOnDestroy() {
    this.OnSent.unsubscribe();
  }


  
}