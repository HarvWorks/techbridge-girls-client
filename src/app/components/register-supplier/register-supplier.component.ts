import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-register-supplier',
  templateUrl: './register-supplier.component.html',
  styleUrls: ['./register-supplier.component.css']
})
export class RegisterSupplierComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if (Cookie.get('anvyl_token'))
      this.router.navigate(['dashboard']);
  }
}
