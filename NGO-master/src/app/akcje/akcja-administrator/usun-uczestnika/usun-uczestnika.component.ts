import { Component, Input } from '@angular/core';
import { User } from '../../../user.service';
import { EventService } from '../../../event.service';

@Component({
  selector: 'usun-uczestnika',
  standalone: true,
  imports: [],
  templateUrl: './usun-uczestnika.component.html',
  styleUrl: './usun-uczestnika.component.scss'
})
export class UsunUczestnika {
  /**
   * Wybrany użytkownik
   */
  @Input() user: User | any;
  /**
   * Wybrane wydarzenie
   */
  @Input() event: User | any;

  constructor(private eventService: EventService) {}

  /**
   * Usuwa wybranego użytkownika z wybranego wydarzenia
   */
  removeUserFromEvent() {
    this.eventService.removeEvent(this.user.id, this.event.id).subscribe({
      next: () => {
        alert('Uczestnik "' + this.user.name + '" został usunięty z eventu ' + this.event.name);
      },
      error: (err) => {
        console.error('Błąd przy usuwaniu z wydarzenia:', err);
        alert('Wystąpił problem przy usuwaniu.');
      }
    });
  }
}
