import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, EventEmitter, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { getRandomColor } from 'app/helpers/color.helper';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-left-first',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './left-first.component.html',
  styleUrls: ['./left-first.component.scss']
})
export class LeftFirstComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Grand Child AA  ngOnChanges: ", changes);
  }

  ngOnInit(): void {
    console.log("Grand Child AA  ngOnInit");
  }

  ngDoCheck(): void {
    console.log("Grand Child AA  ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("Grand Child AA  ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("Grand Child AA  ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("Grand Child AA  ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("Grand Child AA  ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("Grand Child AA  ngOnDestroy");
  }
}
