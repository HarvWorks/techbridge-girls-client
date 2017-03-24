import { Component, OnInit } from '@angular/core';

import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-maker-header',
  templateUrl: './maker-header.component.html',
  styleUrls: ['./maker-header.component.css']
})
export class MakerHeaderComponent implements OnInit {

  constructor(
    private session: SessionService
  ) { }

  ngOnInit() {
  }

}
