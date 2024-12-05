import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { EventService, Event } from '../event.service';


@Component({
  selector: 'app-edytuj-akcje',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './edytuj-akcje.component.html',
  styleUrl: './edytuj-akcje.component.scss'
})
export class EdytujAkcjeComponent implements OnInit {
  eventForm: FormGroup;
  eventId: number = 0;

  constructor(private route: ActivatedRoute, private eventService: EventService, private router: Router, private location: Location) {
    this.eventForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      seats: new FormControl('', [Validators.required, Validators.min(0)]),
      time: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    // Pobierz id wydarzenia z parametru w URL
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.eventId = +idParam;
        this.loadEventDetails(this.eventId);
      } else {
        console.error('Brak parametru "id" w URL');
        this.router.navigate(['']);
      }
    });
    
  }

  loadEventDetails(id: number) {
    this.eventService.getEventById(id).subscribe({
      next: (event) => {
        this.eventForm.patchValue(event);
      },
      error: (err) => {
        console.error('Błąd podczas pobierania wydarzenia:', err);
      }
    });
  }

  saveEvent() {
    if (this.eventForm.valid) {
      // Pobranie danych z formularza i dodanie id do obiektu
      const updatedEvent = { ...this.eventForm.value, id: this.eventId };
      console.log('Wysyłane dane na backend:', updatedEvent);
      // Wywołanie metody w serwisie, aby zaktualizować wydarzenie
      this.eventService.updateEvent(this.eventId, updatedEvent).subscribe({
        next: (response) => {
          console.log('Zaktualizowane wydarzenie:', response);
          // Po zapisaniu wróć na poprzednią stronę
          this.location.back();
        },
        error: (err) => {
          console.error('Błąd przy aktualizacji:', err);
        }
      });
    }
  }
  
}
