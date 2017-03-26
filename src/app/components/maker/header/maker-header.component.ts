import { Component, OnInit, OnDestroy } from '@angular/core';

import { SessionService } from '../../services/session.service';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-maker-header',
  templateUrl: './maker-header.component.html',
  styleUrls: ['./maker-header.component.css']
})
export class MakerHeaderComponent implements OnInit, OnDestroy {
  private onSent;

  constructor(
    private session: SessionService,
    private socket: SocketService
  ) { }

  ngOnInit() {
    this.onSent = this.socket.getOnSent().subscribe(data => {

    })
  }

  ngOnDestroy() {
    this.onSent.unsubscribe();
  }

}
