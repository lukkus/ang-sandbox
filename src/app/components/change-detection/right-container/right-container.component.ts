import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { getRandomColor } from 'src/app/helpers/color.helper';

@Component({
  selector: 'app-right-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './right-container.component.html',
  styleUrls: ['./right-container.component.scss']
})
export class RightContainerComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log("Child B  ngOnInit");
  }

  ngDoCheck(): void {
    console.log("Child B  ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("Child B  ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("Child B  ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("Child B  ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("Child B  ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("Child B  ngOnDestroy");
  }

}
