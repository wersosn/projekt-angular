import { Component, Input } from '@angular/core';
import { EventService } from '../../event.service';

/**
 * Komponent odpowiedzialny za wyświetlanie i interakcję z pojedynczym wydarzeniem dla wolontariusza.
 */
@Component({
  selector: 'akcja',
  standalone: true,
  imports: [],
  templateUrl: './akcja.component.html',
  styleUrl: './akcja.component.scss'
})
export class Akcja {

  /**
   * Obiekt reprezentujący dane wydarzenia.
   * @type {Event | any}
   */
  @Input() event: Event | any;

  /**
   * Tworzy instancję komponentu Akcja.
   * @param {EventService} eventService - Serwis który pobiera dane o eventach.
   */
  constructor(protected eventService: EventService) { }

  /**
   * Usuwa wydarzenie z listy zapisanych wydarzeń zalogowanego wolontariusza.
   *
   * @param {number} eventId - Identyfikator wydarzenia, z którego udziału użytkownik chce zrezygnować.
   * @returns {void}
   */
  cancelEvent(eventId: number): void {
    let userId = localStorage.getItem('userId');
    if (userId) {
      this.eventService.removeEvent(parseInt(userId), eventId).subscribe({
        next: () => {
          alert('Zrezygnowałeś z udziału w wydarzeniu!');
        },
        error: (err) => {
          console.error('Błąd przy rezygnacji z wydarzenia:', err);
          alert('Wystąpił problem przy rezygnacji.');
        }
      });
    }
  }
}
