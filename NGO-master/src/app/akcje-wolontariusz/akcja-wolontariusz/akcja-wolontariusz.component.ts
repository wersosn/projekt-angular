import { Component,OnInit  } from '@angular/core';
import { UserEventService } from '../../UserEvent.service';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../event.service';
@Component({
  selector: 'app-akcja-wolontariusz',
  standalone: true,
  imports: [],
  templateUrl: './akcja-wolontariusz.component.html',
  styleUrl: './akcja-wolontariusz.component.scss'
})
export class AkcjaWolontariuszComponent implements OnInit {
  Zapisy: any[] = []; // Tablica akcji, w których bierze udział użytkownik

  constructor(private eventService: EventService,private userEventService: UserEventService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Pobierz ID użytkownika z lokalnego storage lub sesji 
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.userEventService.getUserEvents(Number(userId)).subscribe(data => {
        this.Zapisy = data; // Zapisz dane wydarzeń do zmiennej
      });
    } 
  }
  cancelEvent(eventId: number): void {
    let userId = localStorage.getItem('userId');
    if(userId){

 
      this.eventService.removeEvent( parseInt(userId), eventId).subscribe({
        next: () => {
          alert('Zrezygnowałeś z udziału w wydarzeniu!');
          this.ngOnInit(); // Odśwież dane po rezygnacji
        },
        error: (err) => {
          console.error('Błąd przy rezygnacji z wydarzenia:', err);
          alert('Wystąpił problem przy rezygnacji.');
        }
      });
    }
    }

  // Dodajemy metodę trackZapisId, aby Angular mógł śledzić zmiany w elementach
  trackZapisId(index: number, zapis: any): number {
    return zapis.id; // Używamy unikalnego ID zapisu
  }
}