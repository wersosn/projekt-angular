import { Component, Input } from '@angular/core';
import { EventService } from '../../../event.service';
import { User } from '../../../user.service';

/**
 * Komponent odpowiedzialny za dodawanie użytkownika do wybranego wydarzenia.
 */
@Component({
  selector: 'dodaj-uczestnika',
  standalone: true,
  imports: [],
  templateUrl: './dodaj-uczestnika.component.html',
  styleUrl: './dodaj-uczestnika.component.scss'
})
export class DodajUczestnika {

  /**
   * Obiekt reprezentujący użytkownika, który ma zostać dodany do wydarzenia.
   * @type {User | any}
   */
  @Input() user: User | any;

  /**
   * Obiekt reprezentujący wydarzenie, do którego użytkownik ma zostać dodany.
   * @type {Event | any}
   */
  @Input() event: Event | any;

  /**
   * Tworzy instancję komponentu `DodajUczestnika`.
   * 
   * @param {EventService} eventService - Serwis odpowiedzialny za operacje związane z wydarzeniami.
   */
  constructor(private eventService: EventService) { }

  /**
   * Dodaje wybranego użytkownika do wybranego wydarzenia za pomocą metody `joinEvent` z serwisu `EventService`.
   * Wyświetla komunikat o błędzie w przypadku niepowodzenia operacji.
   */
  addUserToEvent(): void {
    this.eventService.joinEvent(this.user.id, this.event.id).subscribe({
      error: (err) => {
        console.error('Błąd zapisu na wydarzenie:', err);
        alert('Wystąpił problem przy zapisywaniu.');
      }
    });
  }
}
