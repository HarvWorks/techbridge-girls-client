import { Component, OnInit } from '@angular/core';

import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  constructor(
    private session: SessionService
  ) { }

  ngOnInit() { }

}