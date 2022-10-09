import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-by',
  templateUrl: './track-by.component.html',
  styleUrls: ['./track-by.component.scss']
})
export class TrackByComponent implements OnInit {
  public notTrackedIds: any[] = [];
  public trackedIds: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.notTrackedIds = this.getIdsArray();
    this.trackedIds = this.getIdsArray();
  }

  private getIdsArray() {
    const tmpArray: any[] = [];
    for (let i = 0; i < 10; i++) {
      tmpArray.push({
        id: i
      });
    }
    return tmpArray;
  }

  trackByFn(index: any) {
    return index; // or item.id
  }

  refreshNotTracked() {
    const lol = this.getIdsArray();
    lol[5]= {id: 666};
    this.notTrackedIds = lol;
  }

  refreshTracked() {
    const lol = this.getIdsArray();
    lol[5]= {id: 123};
    this.trackedIds = lol;
  }
}
