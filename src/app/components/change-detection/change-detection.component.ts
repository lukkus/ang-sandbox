import { ChangeDetectionStrategy, Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { getRandomColor } from 'src/app/helpers/color.helper';


@Component({
  selector: 'app-change-detection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss']
})
export class ChangeDetectionComponent implements OnChanges, DoCheck {
  style: any;
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Main container changes');
  }
  ngDoCheck(): void {
    this.style = { 'background-color': getRandomColor() };
    console.log('Main container do check');
  }
  title = 'changeDetection xd';
}
