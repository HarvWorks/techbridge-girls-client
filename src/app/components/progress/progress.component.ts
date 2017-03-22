import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if (!Cookie.get('anvyl_token'))
      this.router.navigate(['']);
  }

}
