import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cookie } from 'ng2-cookies';

import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private router: Router,
    private session: SessionService
  ) { }

  ngOnInit() {
    if (this.session.type === 0)
      this.router.navigate(['maker/dashboard']);
    else if (this.session.type === 1)
      this.router.navigate(['supplier/dashboard']);
  }

}
