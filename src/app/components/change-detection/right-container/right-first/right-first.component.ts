import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-right-first',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './right-first.component.html',
  styleUrls: ['./right-first.component.scss']
})
export class RightFirstComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Grand Child BA  ngOnChanges: ", changes);
  }

  ngOnInit(): void {
    console.log("Grand Child BA  ngOnInit");
  }

  ngDoCheck(): void {
    console.log("Grand Child BA  ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("Grand Child BA  ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("Grand Child BA  ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("Grand Child BA  ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("Grand Child BA  ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("Grand Child BA  ngOnDestroy");
  }
}
