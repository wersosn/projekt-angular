import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User, UserService } from '../../../user.service';
import { EventService } from '../../../event.service';

@Component({
  selector: 'usun-uczestnika',
  standalone: true,
  imports: [],
  templateUrl: './usun-uczestnika.component.html',
  styleUrl: './usun-uczestnika.component.scss'
})
export class UsunUczestnikaComponent {
  @Input() user: any;
  @Input() event: any;

  constructor(private eventService: EventService) {}

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
