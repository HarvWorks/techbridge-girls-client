import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-maker-progress',
  templateUrl: './maker-progress.component.html',
  styleUrls: ['./maker-progress.component.css']
})
export class MakerProgressComponent implements OnInit {

  constructor(
    private router: Router,
    private session: SessionService
  ) { }

  ngOnInit() {
    if (this.session.type !== 0)
      this.router.navigate(['']);
  }
}
