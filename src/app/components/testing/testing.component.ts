import { Component, OnInit } from '@angular/core';
import { combineLatest, from, mergeMap, of, zip } from 'rxjs';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {
  obs1$ = of(1, 2, 3);
  obs2$ = of(4, 5, 6, 7);
  constructor() { }

  ngOnInit(): void {
    console.log("combineLatest");
    combineLatest([this.obs1$, this.obs2$]).subscribe(
      ([valueFromObs1, valueFromObs2]) => {
        console.log(valueFromObs1, valueFromObs2);
      }
    );

    console.log("zip");
    zip(this.obs1$, this.obs2$).subscribe(
      ([valueFromObs1, valueFromObs2]) => {
        console.log(valueFromObs1, valueFromObs2);
      }
    );

    console.log("mergeMap");
    from([1, 2, 3]).pipe(
      mergeMap(x => of(x * 2))
    ).subscribe(value => console.log(value));

  }
}
