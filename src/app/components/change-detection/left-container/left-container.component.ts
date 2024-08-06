import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { getRandomColor } from 'app/helpers/color.helper';

@Component({
  selector: 'app-left-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './left-container.component.html',
  styleUrls: ['./left-container.component.scss']
})
export class LeftContainerComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Child A  ngOnChanges: ", changes);
  }

  ngOnInit(): void {
    console.log("Child A  ngOnInit");
  }

  ngDoCheck(): void {
    console.log("Child A  ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("Child A  ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("Child A  ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("Child A  ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("Child A  ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("Child A  ngOnDestroy");
  }
}
