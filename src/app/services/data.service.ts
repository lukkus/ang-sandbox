import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public dataSource = new Subject<string>();
  constructor() {}

  public sendData(value: string) {
    this.dataSource.next(value);
  }
}
