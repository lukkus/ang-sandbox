import { Component } from '@angular/core';
import { WebSocketService } from './web-sockets.service';

@Component({
  selector: 'app-web-sockets',
  templateUrl: './web-sockets.component.html',
  styleUrls: ['./web-sockets.component.scss']
})
export class WebSocketsComponent {
  constructor(
    private webSocketService: WebSocketService,
  ) {}

  generateReport(): void {
    // Send message to start report generation
    this.webSocketService.sendMessage({ action: 'api' });
  }

  getMock(): void {
    this.webSocketService.sendMessage({ action: 'mock' });
  }

  getApi(): void {
    this.webSocketService.sendMessage({ action: 'api' });
  }

  getTest(): void {
    this.webSocketService.sendMessage({ action: 'test' });
  }

  sendMessage(): void {
    const message = {
      action: 'sendMessage',
      data: {
        parameter1: 'hi from parameter1'
      }
    };
    this.webSocketService.sendMessage(message);
  }

  sendEmailMessage(): void {
    const message = {
      action: 'sendMessage',
      messageType: 'email',
      address: 'lukasz@email.com'
    };
    this.webSocketService.sendMessage(message);
  }

  sendLambda(): void {
    const message = {
      action: 'lambda',
      body: 'lukasz'
    };
    this.webSocketService.sendMessage(message);
  }
}
