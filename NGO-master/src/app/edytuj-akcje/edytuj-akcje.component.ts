import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { EventService } from '../event.service';

@Component({
  selector: 'app-edytuj-akcje',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './edytuj-akcje.component.html',
  styleUrl: './edytuj-akcje.component.scss'
})
export class EdytujAkcje implements OnInit {
  eventForm: FormGroup;
  eventId: number = 0;

  /**
   * Wstrzykuje serwisy: `ActivatedRoute`, `EventService`, `Router`, `Location` i tworzy formularz do edycji wydarzenia z walidacją pól.
   */
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

  /**
   * Pobiera id wydarzenia z parametru w URL. W przypadku braku id wraca na stronę startową.
   */
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

  /**
   * Wczytuje szczegóły wydarzenia przy użyciu `EventService`
   * 
   * @param id Id edytowanego wydarzenia
   */
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

  /**
   * Zapisuje edytowane wydarzenie przy użyciu `EventService` i wraca na poprzednią stronę
   */
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
