import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { EventService } from '../event.service';

/**
 * Komponent do edycji wydarzenia. Umożliwia edycję szczegółów istniejącego wydarzenia oraz zapisanie zmian.
 */
@Component({
  selector: 'app-edytuj-akcje',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './edytuj-akcje.component.html',
  styleUrl: './edytuj-akcje.component.scss'
})
export class EdytujAkcje implements OnInit {
  /**
   * Formularz do edycji wydarzenia, zawiera pola z walidacją.
   * 
   * @type {FormGroup}
   */
  eventForm: FormGroup;

  /**
   * ID edytowanego wydarzenia, pobrane z parametru w URL.
   * 
   * @type {number}
   */
  eventId: number = 0;

  /**
   * Wstrzykuje wymagane serwisy: `ActivatedRoute`, `EventService`, `Router`, `Location`.
   * Tworzy formularz z wymaganymi polami i walidacją.
 
   */
  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private router: Router,
    private location: Location
  ) {
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
   * Pobiera ID wydarzenia z parametru w URL i ładuje jego szczegóły.
   * Jeśli parametr nie istnieje, przekierowuje użytkownika na stronę główną.
   */
  ngOnInit(): void {
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
   * Pobiera szczegóły wydarzenia z serwera i wypełnia nimi formularz.
   * 
   * @param {number} id - ID edytowanego wydarzenia.
   */
  loadEventDetails(id: number): void {
    this.eventService.getEventById(id).subscribe({
      next: (event) => {
        this.eventForm.patchValue(event); // Wypełnia formularz danymi wydarzenia.
      },
      error: (err) => {
        console.error('Błąd podczas pobierania wydarzenia:', err);
      }
    });
  }

  /**
   * Zapisuje zmodyfikowane wydarzenie przy użyciu `EventService` i wraca na poprzednią stronę.
   */
  saveEvent(): void {
    if (this.eventForm.valid) {
      const updatedEvent = { ...this.eventForm.value, id: this.eventId };
      console.log('Wysyłane dane na backend:', updatedEvent);

      this.eventService.updateEvent(this.eventId, updatedEvent).subscribe({
        next: (response) => {
          console.log('Zaktualizowane wydarzenie:', response);
          this.location.back(); // Powrót do poprzedniej strony.
        },
        error: (err) => {
          console.error('Błąd przy aktualizacji:', err);
        }
      });
    }
  }
}
