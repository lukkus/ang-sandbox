import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-learning';

  constructor(
    private router: Router,
    private cookieService: CookieService
  ) {
    this.cookieService.set("token", "asdfsdgnsfosd");
    this.cookieService.set("id_token", "asdfsdgnsfosd");
    this.cookieService.set('<cookieName>', '<cookieValue>', 3000, '/', '', true, 'Strict');
    this.setCookie('authToken', 'your-token-value', 1);
    document.cookie = "authToken=your-token-value; SameSite=Strict; Path=/";
  }

  openSidebar() {
    console.log("AppComponent")
    this.router.navigate([{ outlets: { sidebar: 'others' } }]);
  }

  setCookie(name: string, value: string, days: number) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }
}
