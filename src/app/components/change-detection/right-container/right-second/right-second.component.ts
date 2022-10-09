import { ChangeDetectionStrategy, Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { getRandomColor } from 'src/app/helpers/color.helper';

@Component({
  selector: 'app-right-second',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './right-second.component.html',
  styleUrls: ['./right-second.component.scss']
})
export class RightSecondComponent implements OnChanges, DoCheck {

  constructor() { }

  style: { 'background-color': any; };
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Right component 2 changes');
  }
  ngDoCheck(): void {
    this.style = { 'background-color': getRandomColor() };
    console.log('Right component 2 do check');
  }

}
