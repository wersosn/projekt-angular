import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EventService, Event } from '../event.service';
import { RouterModule } from '@angular/router';  // Zaimportuj RouterModule
import { UserService } from '../user.service';

@Component({
  selector: 'app-strona-akcji',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './strona-akcji.component.html',
  styleUrl: './strona-akcji.component.scss'
})

export class StronaAkcji implements OnInit {

  isLoggedIn: boolean = false; // Zmienna sprawdzająca, czy użytkownik jest zalogowany
  userRole: string | null = null;
  id: number = 0;
  eventDetails: any | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private eventService: EventService, private userService: UserService) { }

  ngOnInit() {
    const userId = localStorage.getItem('userId');
    this.isLoggedIn = !!userId;
    this.userRole = this.getUserRole();
    console.log("Rola użytkownika: ", this.userRole);
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.loadEventDetails(this.id);
    });
  }

  loadEventDetails(id: number) {
    this.eventService.getEventById(id).subscribe({
      next: event => {
        this.eventDetails = event;
        console.log('Szczegóły:', this.eventDetails);
      },
      error: err => console.error('Error podczas pobierania szczegółów:', err)
    });
  }

  back() {
    this.router.navigate(['', { from: 'StronaAkcji' }]);
  }

  getUserRole(): string | null {
    return localStorage.getItem('userRole');
  }

  // Metoda do zapisywania na akcje
  //TODO DODAĆ ODŚWIERZANIE LICZNIKA 
  joinEvent(): void {
    if (this.isLoggedIn) {
      const userId = localStorage.getItem('userId');
      const eventId = this.eventDetails.id;

      if (userId) {
        this.eventService.joinEvent(+userId, eventId).subscribe({
          next: () => {
            this.router.navigate([`/akcje/szczegóły/${eventId}`]);
            this.ngOnInit(); // Odśwież dane po zapisaniu
          },
          error: (err) => {
            console.error('Błąd zapisu na wydarzenie:', err);
            alert('Wystąpił problem przy zapisywaniu.');
          }
        });

      }
    } else {
      alert('Musisz być zalogowany, aby zapisać się na wydarzenie!');
    }
  }

  deleteEvent(eventId: number) {
    if (confirm('Czy na pewno chcesz usunąć to wydarzenie?')) {
      this.eventService.deleteEvent(eventId).subscribe({
        next: (response) => {
          
          alert('Wydarzenie zostało usunięte.');
          this.router.navigate(['']);  // Przekierowanie na stronę główną lub listę wydarzeń
        },
        error: (err) => {
          console.error('Błąd podczas usuwania wydarzenia:', err);
          alert('Wystąpił błąd podczas usuwania wydarzenia.');
        }
      });
    }
  }

}
