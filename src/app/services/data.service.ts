import { Injectable } from '@angular/core';
import { delay, filter, map, Observable, of, Subject, timer } from 'rxjs';
import { Gender } from '../components/enums/gender.enum';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public dataSource = new Subject<string>();
  private people: Person[] = [{
    firstName: "Łukasz",
    lastName: "Kuś",
    gender: Gender.Male
  }, {
    firstName: "Martyna",
    lastName: "Krajza",
    gender: Gender.Female
  },{
    firstName: "Martyna",
    lastName: "Kuś",
    gender: Gender.Female
  }, {
    firstName: "Michał",
    lastName: "Kuś",
    gender: Gender.Male
  }];
  constructor() {}

  public sendData(value: string) {
    this.dataSource.next(value);
  }

  public getPeople(): Observable<Person[]> {
    return of(this.people).pipe(delay(2000));
  }

  public getPeopleOfGender(gender: Gender): Observable<Person[]> {
    return of(this.people)
      .pipe(
        map(people => people.filter(person => person.gender === gender)),
        delay(1500)
      );
  }

  public getRequiredGender(): Observable<Gender> {
    return of(Gender.Female).pipe(delay(1000));
  }

  public getTimer(): Observable<number> {
    return timer(500, 1000)
  }
}
