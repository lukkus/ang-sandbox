import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { getRandomColor } from 'app/helpers/color.helper';

@Component({
  selector: 'app-right-second',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './right-second.component.html',
  styleUrls: ['./right-second.component.scss']
})
export class RightSecondComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Grand Child BB  ngOnChanges: ", changes);
  }

  ngOnInit(): void {
    console.log("Grand Child BB  ngOnInit");
  }

  ngDoCheck(): void {
    console.log("Grand Child BB  ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("Grand Child BB  ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("Grand Child BB  ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("Grand Child BB  ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("Grand Child BB  ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("Grand Child BB  ngOnDestroy");
  }

}
