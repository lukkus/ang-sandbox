import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss'],
})
export class SignalsComponent {
  counter = signal(0);
  get name(): string {
    console.log('Name getter');
    return 'lukasz';
  }

  getName(): string {
    console.log('getName method');
    return 'Martyna';
  }

  changeSignal() {
    const currentValue = this.counter();
    const newValue = currentValue + 1;
    this.counter.set(newValue);
  }
}
