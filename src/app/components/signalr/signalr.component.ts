import { Component, OnInit } from '@angular/core';
import { SignalrService } from './signalr.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signalr',
  templateUrl: './signalr.component.html',
  styleUrls: ['./signalr.component.scss']
})
export class SignalrComponent {
  private url: string = "wss://amjtc1ttrg.execute-api.eu-west-1.amazonaws.com/production";
  public user: string;
  public message: string;
  public messages: { user: string, message: string }[] = [];
  private socket: WebSocket;

  constructor(
    private signalrService: SignalrService,
    private cookieService: CookieService
  ) {

  }

  ngOnInit() {
    //this.setCookiesParams();
    const queryParamsUrl = this.buildQueryParamsUrl();
    this.socket = new WebSocket(`${this.url}?${queryParamsUrl}`);

    this.socket.onopen = (event) => {
      console.log('WebSocket connection established: ', event);
    };

    this.socket.onmessage = (event) => {
      console.log("OnMessage resposne: ", event.data);
    };

    this.socket.onclose = (event) => {
      console.log('WebSocket connection closed');
    };
    this.socket.onerror = (error) => {
      console.log('WebSocket error:', error);
    };
  }

  Send() {
    const message = {
      action: 'lambda',
      body: 'lukasz'
    };
    const messageString = JSON.stringify(message);
    console.log("message sent: ", messageString);
    this.socket.send(messageString);
  }

  getRandomId(): number {
    //return Math.floor(Math.random() * 100) + 1;
    return Math.floor(Math.random() * 2) + 1;
  }

  private setCookiesParams(): void {
    // const accountId = this.getRandomId();
    // const organizationId = this.getRandomId();
    // const roleId = this.getRandomId();
    // console.log('accountId: ', accountId);
    // console.log('organizationId: ', organizationId);
    // console.log('roleId: ', roleId);
    // this.cookieService.set('accountId', accountId.toString());
    // this.cookieService.set('organizationId', organizationId.toString());
    // this.cookieService.set('roleId', roleId.toString());
    this.cookieService.set('id_token', 'lol=xd');
  }

  private buildQueryParamsUrl(): string {
    const accountId = this.getRandomId();
    const organizationId = this.getRandomId();
    const roleId = this.getRandomId();
    console.log('accountId: ', accountId);
    console.log('organizationId: ', organizationId);
    console.log('roleId: ', roleId);

    return `token=dupa&accountId=${accountId}&roleId=${roleId}&organizationId=${organizationId}`;
  }
}
