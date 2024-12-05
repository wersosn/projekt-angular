import { Component, OnInit } from '@angular/core';
import { AkcjaComponent } from './akcja/akcja.component';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { Event, EventService } from '../event.service';
import { UserEventService } from '../UserEvent.service';
import { UserService } from '../user.service';
import { AkcjaAdministratorComponent } from './akcja-administrator/akcja-administrator.component';
@Component({
  selector: 'app-akcje',
  standalone: true,
  imports: [AkcjaComponent, AkcjaAdministratorComponent,RouterLink,RouterLinkActive],
  templateUrl: './akcje.component.html',
  styleUrl: './akcje.component.scss'
})
export class AkcjeComponent implements OnInit {
  /**
   * Zalogowany administrator:
   * Tablica wszystkich akcji
   * 
   * Zalogowany użytkownik:
   * Tablica akcji, w których bierze udział użytkownik
   */
  events: Event[] = [];
  private role: string = "";

  constructor(private eventService: EventService, private userEventService: UserEventService, private userService: UserService) {}

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
