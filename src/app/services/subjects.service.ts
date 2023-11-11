import { Injectable } from "@angular/core";
import { BehaviorSubject, ReplaySubject, Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  subject = new Subject<string>();
  behavioralSubject = new BehaviorSubject<string>("Init behavioral subject");
  replaySubject = new ReplaySubject<string>(2);

  constructor(){
    this.subject.next("test");

    this.behavioralSubject.next("Init behavioral subject from constructor");

    this.replaySubject.next("A");
    this.replaySubject.next("B");
    this.replaySubject.next("C");
    this.replaySubject.next("D");
  }
}
