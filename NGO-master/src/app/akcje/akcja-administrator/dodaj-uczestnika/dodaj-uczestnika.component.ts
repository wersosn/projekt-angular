import { Component, Input } from '@angular/core';
import { EventService } from '../../../event.service';

@Component({
  selector: 'dodaj-uczestnika',
  standalone: true,
  imports: [],
  templateUrl: './dodaj-uczestnika.component.html',
  styleUrl: './dodaj-uczestnika.component.scss'
})
export class DodajUczestnikaComponent {
  @Input() user: any;
  @Input() event: any;

  constructor(private eventService: EventService) {}

  addUserToEvent() {
    this.eventService.joinEvent(this.user.id, this.event.id).subscribe({
      error: (err) => {
        console.error('Błąd zapisu na wydarzenie:', err);
        alert('Wystąpił problem przy zapisywaniu.');
      }
    });
  }
}
