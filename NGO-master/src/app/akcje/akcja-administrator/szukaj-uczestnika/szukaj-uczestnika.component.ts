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

  /**
   * Wyszukuje użytkowników w których imieniu zawiera się name lub w nazwisku surname.
   * 
   * Wielkość znaków przy wyszukiwaniu jest pomijana. 
   * 
   * W przypadku pustych name i surname, przekazuje listę wszystkich użytkowników.
   * 
   * @example
   * // Dla danych użytkowników:
   * | Adam | Malysz | ...
   * | ada  | maria  | ...
   * // Wywołania:
   * findUserInEvent("ada", "")
   * findUserInEvent("Ada", "MA")
   * findUserInEvent("", "")
   * // Znajdują obu użytkowników.
   * // A wywołania:
   * findUserInEvent("adam", "")
   * findUserInEvent("", "MAL")
   * // Znajdują tylko 
   * | Adam | Malysz| ...
   * 
   * @param {string} name Imię szukanego użytkownika 
   * @param {string} surname Nazwisko szukanego użytkownika 
   */
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
  }
}
