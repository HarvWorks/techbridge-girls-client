import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-supplier-messages',
  templateUrl: './supplier-messages.component.html',
  styleUrls: ['./supplier-messages.component.css']
})
export class SupplierMessagesComponent implements OnInit {

  constructor(
    private router: Router,
    private session: SessionService
  ) { }

  ngOnInit() {
    if (this.session.type !== 1)
      this.router.navigate(['']);
  }
}
