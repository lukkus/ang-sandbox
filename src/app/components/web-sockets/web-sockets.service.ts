import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ResponseModel } from './response.model';
import { WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket: WebSocket;
  private joinroomSocket: WebSocket;

  private url = "wss://cce3dwpznl.execute-api.eu-west-1.amazonaws.com/development";
  private joinroomUrl = "wss://cce3dwpznl.execute-api.eu-west-1.amazonaws.com/development/joinroom";

  constructor(private toastr: ToastrService) {
    const token = 'valid';//this.generateToken();
    console.log("token: ", token);
    this.socket = new WebSocket(`${this.url}`);
    this.socket.onopen = (event) => {
      console.log('WebSocket connection established: ', event);
      this.joinroomSocket = new WebSocket(`${this.joinroomUrl}`);

      this.joinroomSocket.onopen = (event) => {
        console.log('Joinroom socket connection established: ', event);
      }

      this.joinroomSocket.onerror = (error) => {
        console.log('Joinroom socket error:', error);
      };
    };

    this.socket.onmessage = (event) => {
      console.log("OnMessage resposne: ", event.data);
      const data: ResponseModel = JSON.parse(event.data);
      console.log("data: ", data);
      this.toastr.success(data.message);
    };
    this.socket.onclose = (event) => {
      console.log('WebSocket connection closed');
    };
    this.socket.onerror = (error) => {
      console.log('WebSocket error:', error);
    };
  }

  public sendMessage(message: any): void {
    const messageString = JSON.stringify(message);
    console.log("message sent: ", messageString);
    this.socket.send(messageString);
  }

  private onMessage(message: any) {
    console.log('Received message:', message);
    // Handle the message
  }

  private onError(error: any) {
    console.error('WebSocket error:', error);
  }

  private onComplete() {
    console.log('WebSocket connection closed');
  }

  generateGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r: number = Math.random() * 16 | 0;
      const v: number = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  getBrowserName(): string {
    const agent = window.navigator.userAgent.toLowerCase()
    switch (true) {
      case agent.indexOf('edge') > -1:
        return 'edge';
      case agent.indexOf('opr') > -1 && !!(<any>window).opr:
        return 'opera';
      case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
        return 'chrome';
      case agent.indexOf('trident') > -1:
        return 'ie';
      case agent.indexOf('firefox') > -1:
        return 'firefox';
      case agent.indexOf('safari') > -1:
        return 'safari';
      default:
        return 'other';
    }
  }

  generateToken(): string {
    return Math.random() < 0.5 ? 'valid' : 'invalid';
  }

  getRandomInt(): number {
    return Math.floor(Math.random() * 1000);
  }
}
