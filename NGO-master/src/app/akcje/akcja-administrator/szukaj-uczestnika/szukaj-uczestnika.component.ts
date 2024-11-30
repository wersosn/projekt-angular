import { Component, EventEmitter, Output } from '@angular/core';
import { User, UserService } from '../../../user.service';

@Component({
  selector: 'szukaj-uczestnika',
  standalone: true,
  imports: [],
  templateUrl: './szukaj-uczestnika.component.html',
  styleUrl: './szukaj-uczestnika.component.scss'
})
export class SzukajUczestnikaComponent {
  @Output() findUserEvent = new EventEmitter<User[]>();

  constructor(private userService: UserService) {}

  findUserInEvent(name: string, surname: string) {
    // userService.getUserByName
    let id = parseInt(name);
    this.userService.getUserData(id).subscribe(user => {
      var users: User[] = [];
      users.push(user);
      this.findUserEvent.emit(users);
    }); 
  }
}
