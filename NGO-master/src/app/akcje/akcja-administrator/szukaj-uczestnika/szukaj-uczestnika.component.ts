import { Component, EventEmitter, Output } from '@angular/core';
import { User, UserService } from '../../../user.service';
/**
 * Komponent do wyszukiwania użytkowników po imieniu i nazwisku.
 
 */
@Component({
  selector: 'szukaj-uczestnika',
  standalone: true,
  imports: [],
  templateUrl: './szukaj-uczestnika.component.html',
  styleUrl: './szukaj-uczestnika.component.scss'
})
export class SzukajUczestnika {
  /**
 * Wydarzenie emitowane po zakończeniu wyszukiwania, zwraca listę znalezionych użytkowników.
 */
  @Output() findUserEvent = new EventEmitter<User[]>();

  /**
   * Wstrzykuje serwis `UserService`
   */
  constructor(private userService: UserService) { }

  /**
   * Wyszukuje użytkowników w których imieniu zawiera się `name` lub w nazwisku `surname`.
   * 
   * Wielkość znaków przy wyszukiwaniu jest pomijana. 
   * 
   * W przypadku pustych `name` i `surname`, przekazuje listę wszystkich użytkowników.
   * 
   * @param {string} name Imię szukanego użytkownika 
   * @param {string} surname Nazwisko szukanego użytkownika 
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
   * | Adam | Malysz | ...
   */
  findUserInEvent(name: string, surname: string) {
    this.userService.getUsers().subscribe(users => {
      var foundUsers: User[] = [];

      if (!name && !surname) {
        this.findUserEvent.emit(users);
        return;
      }

      users.forEach(user => {
        if (name && user.name.toLowerCase().includes(name.toLowerCase())) {
          foundUsers.push(user);
        } else if (surname && user.surname.toLowerCase().includes(surname.toLowerCase())) {
          foundUsers.push(user);
        }
        this.findUserEvent.emit(foundUsers);
      });
    });
  }
}
