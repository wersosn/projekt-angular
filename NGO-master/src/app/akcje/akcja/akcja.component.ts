import { Component,Input } from '@angular/core';
import { EventService } from '../../event.service';
@Component({
  selector: 'akcja',
  standalone: true,
  imports: [],
  templateUrl: './akcja.component.html',
  styleUrl: './akcja.component.scss'
})
export class Akcja{
  @Input() event: Event | any;
  constructor(protected eventService: EventService) {}

  /**
   * Usuwa wydarzenie z listy zalogowanego użytkownika
   * 
   * @param {number} eventId Id wydarzenia z którego udziału rezygnuje zalogowany użytkownik
   */
  cancelEvent(eventId: number): void {
    let userId = localStorage.getItem('userId');
    if(userId){
      this.eventService.removeEvent( parseInt(userId), eventId).subscribe({
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