import { ChangeDetectionStrategy, Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { getRandomColor } from 'src/app/helpers/color.helper';

@Component({
  selector: 'app-right-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './right-container.component.html',
  styleUrls: ['./right-container.component.scss']
})
export class RightContainerComponent implements OnChanges, DoCheck {

  constructor() { }

  style: { 'background-color': any };
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Right container changes');
  }
  ngDoCheck(): void {
    this.style = { 'background-color': getRandomColor() };
    console.log('Right container do check');
  }

}
