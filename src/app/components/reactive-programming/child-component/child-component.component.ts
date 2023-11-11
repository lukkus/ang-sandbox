import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent {
  @Input() name: string;
  @Input() surname: string;

  get fullName(): string {
    console.log("getFullName");
    return `${this.name} ${this.surname}`
  }
}
