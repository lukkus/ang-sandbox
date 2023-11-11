import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-learning';

  constructor(private router: Router) { }

  openSidebar() {
    console.log("openSidebar")
    this.router.navigate([{ outlets: { sidebar: 'others' } }]);
  }
}
