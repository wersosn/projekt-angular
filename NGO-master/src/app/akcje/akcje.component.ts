import { Component, OnInit } from '@angular/core';
import { Akcja } from './akcja/akcja.component';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { Event, EventService } from '../event.service';
import { UserEventService } from '../UserEvent.service';
import { UserService } from '../user.service';
import { AkcjaAdministrator } from './akcja-administrator/akcja-administrator.component';
@Component({
  selector: 'app-akcje',
  standalone: true,
  imports: [Akcja, AkcjaAdministrator,RouterLink,RouterLinkActive],
  templateUrl: './akcje.component.html',
  styleUrl: './akcje.component.scss'
})
export class Akcje implements OnInit {
  /**
   * Zalogowany administrator:
   * Tablica wszystkich wydarzeń
   * 
   * Zalogowany użytkownik:
   * Tablica wydarzeń, w których bierze udział użytkownik
   */
  events: Event[] = [];
  /** @ignore */
  private role: string = "";

  /**
   * Wstrzykuje serwisy: `EventService`, `UserEventService`, `UserService`
   */
  constructor(private eventService: EventService, private userEventService: UserEventService, private userService: UserService) {}

  /**
   * Zalogowany administrator:
   * Pobiera wszystkie wydarzenia przy użyciu `EventService`
   * 
   * Zalogowany użytkownik:
   * Pobiera wydarzenia, w których bierze udział użytkownik, przy użyciu `EventServie`
   */
  ngOnInit(): void {
    // Pobierz ID użytkownika z lokalnego storage lub sesji 
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.userService.getUserData(Number(userId)).subscribe(user => {
        this.role = user.role;
        if(this.role == "administrator"){
          this.eventService.getAllEvents().subscribe(events => {
            this.events = events;
          });
        } else {
          this.userEventService.getUserEvents(Number(userId)).subscribe(events => {
            this.events = events; // Zapisz dane wydarzeń do zmiennej
          });
        }
      });
    }
  } 

  getRole(): string {
    return this.role;
  }
}
