import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { User } from "../models/user.model";

const ANONYMOUS_USER: User = {
  firstName: '',
  lastName: ''
};

const users: User[] = [{
  firstName: "Lukasz",
  lastName: "Kus"
}];

const observable$ = new Observable((subscriber) => {
  let count = 0;

  const interval = setInterval(() => {
    subscriber.next(count);
    count++;
  }, 1000);

  return () => {
    clearInterval(interval);
  };
});

@Injectable({
  providedIn: 'root'
})
export class UserService {

 private subject = new BehaviorSubject<User>(ANONYMOUS_USER);

 user$: Observable<User> = this.subject.asObservable();

 loadUser(user:User) {
     this.subject.next(user);
 }

 addUser(): void {
  users.push({
    firstName: "Michal",
    lastName: "Kus"
  })
 }

 public getUsers(): Observable<User[]> {
  return of(users)
 }

 public getCounter(): Observable<any> {
  return observable$;
 }

}
