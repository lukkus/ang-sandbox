import { Component, OnInit } from '@angular/core';
import { SignalrService } from './signalr.service';

@Component({
  selector: 'app-signalr',
  templateUrl: './signalr.component.html',
  styleUrls: ['./signalr.component.scss']
})
export class SignalrComponent {
  public user: string;
  public message: string;
  public messages: { user: string, message: string }[] = [];

  constructor(private signalrService: SignalrService) {}

  ngOnInit() {
    this.signalrService.startConnection();
    this.signalrService.addTransferMessageListener((user, message) => {
      this.messages.push({ user, message });
    });
  }

  public sendMessage() {
    this.signalrService.sendMessage(this.user, this.message);
  }
}
