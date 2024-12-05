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
    this.userService.getUsers().subscribe(users => {
      var foundUsers: User[] = [];

      if(!name && !surname) {
        this.findUserEvent.emit(users);
        return;
      }

      users.forEach(user => {
        if(name && user.name.toLowerCase().includes(name.toLowerCase())) {
          foundUsers.push(user);
        } else if(surname && user.surname.toLowerCase().includes(surname.toLowerCase())) {
          foundUsers.push(user);
        }
        this.findUserEvent.emit(foundUsers);
      });
    });

    /*let id = parseInt(name);
    this.userService.getUserData(id).subscribe(user => {
      var users: User[] = [];
      users.push(user);
      this.findUserEvent.emit(users);
    }); */
  }
}
