import { Component, OnInit, OnDestroy } from '@angular/core';

import { SessionService } from '../../../services/session.service';
import { SocketService } from '../../../services/socket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  private onSent;

  constructor(
    private session: SessionService,
    private socket: SocketService
  ) { }

  ngOnInit() {
    // this.onSent = this.socket.getOnSent().subscribe(data => {

    // })
  }

  ngOnDestroy() {
    // this.onSent.unsubscribe();
  }

}