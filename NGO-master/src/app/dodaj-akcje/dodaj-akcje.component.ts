import { Component } from '@angular/core';
import { EventService } from '../event.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-dodaj-akcje',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './dodaj-akcje.component.html',
  styleUrl: './dodaj-akcje.component.scss'
})

export class DodajAkcjeComponent {
  eventForm: FormGroup;
  newEvent = {
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    seats: ''
  };

  // Konstruktor, w którym wstrzykiwany jest serwis EventService + dodanie walidacji
  constructor(private eventService: EventService, private router: Router) { 
    this.eventForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      seats: new FormControl(0, [Validators.required, Validators.min(1)])
    });
  }

  // Dodanie wydarzenia przy użyciu EventService
  addEvent() {
    if (this.eventForm.valid) {
      const eventWithId = { id: Date.now(), ...this.eventForm.value };
      this.eventService.addEvent(eventWithId).subscribe({
        next: () => {
          console.log('Event added successfully');
          this.eventForm.reset();
          this.router.navigate(['']);
        },
        error: err => console.error('Error adding event:', err)
      });
    }
  }

  // Czyszczenie formularza
  clearForm() {
    this.newEvent = { title: '', description: '', date: '', time: '', location: '', seats: '' };
  }
}
