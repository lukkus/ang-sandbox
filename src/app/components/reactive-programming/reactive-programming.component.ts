import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { fromEvent, map, Observable, tap } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reactive-programming',
  templateUrl: './reactive-programming.component.html',
  styleUrls: ['./reactive-programming.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveProgrammingComponent implements OnInit {

  public users: User[];
  public users$: Observable<User[]>
  constructor(private usersService: UserService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    })

    this.users$ = this.usersService.getUsers();
  }

  addUser(): void {
    this.usersService.addUser();
  }
}
