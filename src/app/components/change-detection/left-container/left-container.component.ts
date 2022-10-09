import { ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { getRandomColor } from 'src/app/helpers/color.helper';

@Component({
  selector: 'app-left-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './left-container.component.html',
  styleUrls: ['./left-container.component.scss']
})
export class LeftContainerComponent implements OnChanges, DoCheck  {

  data: any = [];
  style: { 'background-color': any };
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Left container changes');
  }
  ngDoCheck(): void {
    this.style = { 'background-color': getRandomColor() };
    console.log('Left container do check');
  }

  passData(val: any) {
    // this.data.push(val);
    this.data = [...this.data, val];
  }
}
