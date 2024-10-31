import { Injectable } from '@angular/core';
import { PubSub } from '@aws-amplify/pubsub';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  public startConnection() {
    const pubSub = new PubSub({
      region: 'eu-west-1',
      endpoint: 'wss://cce3dwpznl.execute-api.eu-west-1.amazonaws.com/development/'
    });
    console.log("pubsub: ", pubSub);

    pubSub.subscribe({topics: 'api'}).subscribe(x => {
      console.log('x: ', x);
    });
  }
  // private hubConnection: signalR.HubConnection;

  // public startConnection() {
  //   // this.hubConnection = new signalR.HubConnectionBuilder()
  //   //   .withUrl('https://localhost:7107/chathub')
  //   //   .build();

  //   this.hubConnection = new signalR.HubConnectionBuilder()
  //     .withUrl('wss://cce3dwpznl.execute-api.eu-west-1.amazonaws.com/development', {
  //       skipNegotiation: true,
  //       transport: signalR.HttpTransportType.WebSockets
  //      })
  //     .build();

  //   this.hubConnection
  //     .start()
  //     .then(() => console.log('Connection started'))
  //     .catch(err => console.log('Error while starting connection: ' + err));
  // }

  // public addTransferMessageListener(callback: (user: string, message: string) => void) {
  //   this.hubConnection.on('ReceiveMessage', callback);
  // }

  // public sendMessage(user: string, message: string) {
  //   this.hubConnection.invoke('SendMessage', user, message)
  //     .catch(err => console.error(err));
  // }
}
