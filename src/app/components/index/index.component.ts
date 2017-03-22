import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if (Cookie.get('anvyl_token'))
      this.router.navigate(['dashboard']);
  }

}
