import { Component, OnInit } from '@angular/core';

import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-supplier-header',
  templateUrl: './supplier-header.component.html',
  styleUrls: ['./supplier-header.component.css']
})
export class SupplierHeaderComponent implements OnInit {

  constructor(
    private session: SessionService
  ) { }

  ngOnInit() {
  }

}
