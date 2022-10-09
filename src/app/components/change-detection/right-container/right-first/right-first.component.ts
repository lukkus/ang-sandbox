import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-first',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './right-first.component.html',
  styleUrls: ['./right-first.component.scss']
})
export class RightFirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
