import { Component,Input } from '@angular/core';
import { EventService } from '../../event.service';
@Component({
  selector: 'akcja',
  standalone: true,
  imports: [],
  templateUrl: './akcja.component.html',
  styleUrl: './akcja.component.scss'
})
export class AkcjaComponent{
  //Zapisy: any[] = []; // Tablica akcji, w których bierze udział użytkownik
  @Input() event: any;
  constructor(protected eventService: EventService) {}
  /*
  ngOnInit(): void {
    // Pobierz ID użytkownika z lokalnego storage lub sesji 
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.userEventService.getUserEvents(Number(userId)).subscribe(data => {
        this.Zapisy = data; // Zapisz dane wydarzeń do zmiennej
      });
    } 
  }
  */
  cancelEvent(eventId: number): void {
    let userId = localStorage.getItem('userId');
    if(userId){

 
      this.eventService.removeEvent( parseInt(userId), eventId).subscribe({
        next: () => {
          alert('Zrezygnowałeś z udziału w wydarzeniu!');
          //.ngOnInit(); // Odśwież dane po rezygnacji
        },
        error: (err) => {
          console.error('Błąd przy rezygnacji z wydarzenia:', err);
          alert('Wystąpił problem przy rezygnacji.');
        }
      });
    }
    }

  // Dodajemy metodę trackZapisId, aby Angular mógł śledzić zmiany w elementach
  trackZapisId(index: number, event: any): number {
    return event.id; // Używamy unikalnego ID zapisu
  }
}