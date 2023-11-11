import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { getRandomColor } from 'src/app/helpers/color.helper';


@Component({
  selector: 'app-change-detection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss']
})
export class ChangeDetectionComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Parent ngOnChanges: ", changes);
  }

  ngOnInit(): void {
    console.log("Parent ngOnInit");
  }

  ngDoCheck(): void {
    console.log("Parent ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("Parent ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("Parent ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("Parent ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("Parent ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("Parent ngOnDestroy");
  }
}
