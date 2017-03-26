import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
    // if (Cookie.get('anvyl_token'))
    //   this.session.setSession();
  }

}