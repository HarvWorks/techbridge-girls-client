import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-supplier-progress',
  templateUrl: './supplier-progress.component.html',
  styleUrls: ['./supplier-progress.component.css']
})
export class SupplierProgressComponent implements OnInit {

  constructor(
    private router: Router,
    private session: SessionService
  ) { }

  ngOnInit() {
    if (this.session.type !== 1)
      this.router.navigate(['']);
  }
}
