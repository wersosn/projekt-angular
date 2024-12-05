import { Component, Input } from '@angular/core';
import { EventService } from '../../../event.service';
import { User } from '../../../user.service';

@Component({
  selector: 'dodaj-uczestnika',
  standalone: true,
  imports: [],
  templateUrl: './dodaj-uczestnika.component.html',
  styleUrl: './dodaj-uczestnika.component.scss'
})
export class DodajUczestnikaComponent {
  /**
   * Wybrany użytkownik
   */
  @Input() user: User | any;
  /**
   * Wybrane wydarzenie
   */
  @Input() event: Event | any;

  constructor(private eventService: EventService) {}

  /**
   * Dodaje wybranego użytkownika do wybranego wydarzenia
   */
  addUserToEvent() {
    this.eventService.joinEvent(this.user.id, this.event.id).subscribe({
      error: (err) => {
        console.error('Błąd zapisu na wydarzenie:', err);
        alert('Wystąpił problem przy zapisywaniu.');
      }
    });
  }
}
