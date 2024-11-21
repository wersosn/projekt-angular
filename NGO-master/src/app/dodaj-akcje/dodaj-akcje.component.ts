import { Component } from '@angular/core';
import { EventService } from '../event.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-dodaj-akcje',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './dodaj-akcje.component.html',
  styleUrl: './dodaj-akcje.component.css'
})

export class DodajAkcjeComponent {
  newEvent = {
    title: '',
    description: '',
    date: '',
    location: ''
  };

  // Konstruktor, w którym wstrzykiwany jest serwis EventService
  constructor(private eventService: EventService) { }

  // Dodanie wydarzenia przy użyciu EventService
  addEvent() {
    const eventWithId = { id: Date.now(), ...this.newEvent };
    this.eventService.addEvent(eventWithId).subscribe({
      next: () => {
        console.log('Event added successfully');
        this.clearForm();
      },
      error: err => console.error('Error adding event:', err)
    });
  }

  // Czyszczenie formularza
  clearForm() {
    this.newEvent = { title: '', description: '', date: '', location: '' };
  }
}
