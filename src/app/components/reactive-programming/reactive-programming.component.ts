import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';
import { combineLatest, EMPTY, forkJoin, mergeMap, of, Subscription, switchMap } from 'rxjs';
import { Person } from 'app/models/person.model';

@Component({
  selector: 'app-reactive-programming',
  templateUrl: './reactive-programming.component.html',
  styleUrls: ['./reactive-programming.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ReactiveProgrammingComponent implements OnInit {
  public people: Person[];
  public peopleAsync: any;
  public combineAllSubscription: Subscription;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // this.dataService.getRequiredGender().subscribe(gender => {
    //   this.dataService.getPeople().subscribe(res => {
    //     this.people = res.filter(x => x.gender === gender);
    //   });
    // })

    this.peopleAsync = this.dataService.getRequiredGender()
      .pipe(
        mergeMap((gender) => this.dataService.getPeopleOfGender(gender))
      );

      const lol$ = forkJoin({
        gender: this.dataService.getRequiredGender(),
        people: this.dataService.getPeople(),
        timer: this.dataService.getTimer()
      });

      lol$.subscribe(console.log)


      const joinedWithObjectForm$ = forkJoin({
        hey: of('Hey'),
        ho: of('Ho')
      });

      joinedWithObjectForm$.subscribe(console.log);
  }
}
