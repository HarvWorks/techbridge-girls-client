import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-maker-dashboard',
  templateUrl: './maker-dashboard.component.html',
  styleUrls: ['./maker-dashboard.component.css']
})
export class MakerDashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private session: SessionService
  ) { }

  ngOnInit() {
    if (this.session.type !== 0)
      this.router.navigate(['']);
  }

}
