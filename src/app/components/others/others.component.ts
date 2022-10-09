import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss']
})
export class OthersComponent implements OnInit {

  public otherThingsList: string[] = [
    "View encapsulation",
    "UI Router",
    "Styling",
    "Guards",
    "Auth",
    "Route load child",
    "Modules lazy loading",
    "Templates",
    "NextJs, db, api on frontend",
    "Mutable vs inmutable",
    "Google other problems..."
  ];
  constructor() { }

  ngOnInit(): void {

  }
}
