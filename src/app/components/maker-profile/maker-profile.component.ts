import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-maker-profile',
  templateUrl: './maker-profile.component.html',
  styleUrls: ['./maker-profile.component.css']
})
export class MakerProfileComponent implements OnInit {

  constructor(
    private router: Router,
    private session: SessionService
  ) { }

  ngOnInit() {
    if (this.session.type !== 1)
      this.router.navigate(['']);
  }
}
