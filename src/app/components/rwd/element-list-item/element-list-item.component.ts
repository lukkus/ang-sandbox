import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-element-list-item',
  templateUrl: './element-list-item.component.html',
  styleUrls: ['./element-list-item.component.scss']
})
export class ElementListItemComponent {
  @Input() elements: any[];
}
