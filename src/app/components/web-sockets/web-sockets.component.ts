import { Component } from '@angular/core';
import { WebSocketService } from './web-sockets.service';

@Component({
  selector: 'app-web-sockets',
  templateUrl: './web-sockets.component.html',
  styleUrls: ['./web-sockets.component.scss']
})
export class WebSocketsComponent {
  message: string;
  action: string;
  subscribeUserCreated = false;
  subscribeUserUpdated = false;

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
    this.webSocketService.sendMessage(
      {
        action: 'test',
        event: 'xd',
        body: {
          data: 'dupa'
        }
      });
  }

  sendMessage(): void {
    this.webSocketService.sendMessage(
      {
        action: this.action,
        data:  {
          room: 'guwno'
      }
      });
  }

  sendEmailMessage(): void {
    const message = {
      action: 'sendMessage',
      messageType: 'email',
      address: 'lukasz@email.com'
    };
    this.webSocketService.sendMessage(message);
  }

  subscribeToAddUser(): void {
    const message = { event: 'userCreated' };
    this.webSocketService.sendMessage(message);
  }

  unsubscribeEvent(event: string): void {
    const message = { action: 'unsubscribe', event: event };
    this.webSocketService.sendMessage(message);
  }

  subscribeEvent(event: string): void {
    const message = { action: 'subscribe', event: event };
    this.webSocketService.sendMessage(message);
  }

  sendLambda(): void {
    const message = {
      action: 'lambda',
      body: 'lukasz'
    };
    this.webSocketService.sendMessage(message);
  }

  onUserCreatedSubscribeChange(): void {
    const event = 'userCreated';
    if (this.subscribeUserCreated) {
      this.subscribeEvent(event);
    } else {
      this.unsubscribeEvent(event);
    }
  }

  onUserUpdatedSubscribeChange(): void {
    const event = 'userUpdated';
    if (this.subscribeUserUpdated) {
      this.subscribeEvent(event);
    } else {
      this.unsubscribeEvent(event);
    }
  }
}
