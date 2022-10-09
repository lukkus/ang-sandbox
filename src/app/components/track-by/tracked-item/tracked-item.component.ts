import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tracked-item',
  templateUrl: './tracked-item.component.html',
  styleUrls: ['./tracked-item.component.scss']
})
export class TrackedItemComponent implements OnInit, OnChanges {
  @Input() id: number;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes: ", changes);
  }

  ngOnInit(): void {
    console.log("id: ", this.id);
  }

}
