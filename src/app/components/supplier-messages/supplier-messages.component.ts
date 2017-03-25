import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../services/session.service';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-supplier-messages',
  templateUrl: './supplier-messages.component.html',
  styleUrls: ['./supplier-messages.component.css']
})
export class SupplierMessagesComponent implements OnInit {

  constructor(
    private router: Router,
    private session: SessionService,
    private socket: SocketService,
  ) { }

  ngOnInit() {
    if (this.session.type !== 1)
      this.router.navigate(['']);
    else {
      this.socket.getTest().subscribe(() => {
        setTimeout(() => {
          this.socket.emit('test');
        }, 2000);
      });
    }
  }



}