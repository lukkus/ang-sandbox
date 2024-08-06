import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { getRandomColor } from 'app/helpers/color.helper';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-left-second',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './left-second.component.html',
  styleUrls: ['./left-second.component.scss']
})
export class LeftSecondComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  value: string = "Init value before change";

  constructor(private changeDetectorRef: ChangeDetectorRef){}

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Grand Child AB  ngOnChanges: ", changes);
  }

  ngOnInit(): void {
    console.log("Grand Child AB  ngOnInit");
    setTimeout(() => {
      this.clickButton();
    }, 3000);
  }

  ngDoCheck(): void {
    console.log("Grand Child AB  ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("Grand Child AB  ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("Grand Child AB  ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("Grand Child AB  ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("Grand Child AB  ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("Grand Child AB  ngOnDestroy");
  }

  clickButton(): void {
    this.value = "Changed value from clickButton"
  }

}
