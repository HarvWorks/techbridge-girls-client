import { Component, OnInit, OnDestroy } from '@angular/core';

import { SessionService } from '../../services/session.service';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-supplier-header',
  templateUrl: './supplier-header.component.html',
  styleUrls: ['./supplier-header.component.css']
})
export class SupplierHeaderComponent implements OnInit {
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
