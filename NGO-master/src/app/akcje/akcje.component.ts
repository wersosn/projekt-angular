import { Component, OnInit } from '@angular/core';
import { AkcjaComponent } from './akcja/akcja.component';
import { RouterOutlet,RouterLink,RouterLinkActive, ActivatedRoute } from '@angular/router';
import { EventService } from '../event.service';
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
  events: any[] = []; // Tablica akcji, w których bierze udział użytkownik
  private role: string = "";

  constructor(private userEventService: UserEventService, private userService: UserService) {}

  ngOnInit(): void {
    // Pobierz ID użytkownika z lokalnego storage lub sesji 
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.userService.getUserData(Number(userId)).subscribe(user => {
        this.role = user.role;
      })
      this.userEventService.getUserEvents(Number(userId)).subscribe(data => {
        this.events = data; // Zapisz dane wydarzeń do zmiennej
      });
    } 
  }

  // Dodajemy metodę trackZapisId, aby Angular mógł śledzić zmiany w elementach
  trackZapisId(index: number, event: any): number {
    return event.id; // Używamy unikalnego ID zapisu
  }

  getRole(): string {
    return this.role;
  }
}
