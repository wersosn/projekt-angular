import { Component, OnInit } from '@angular/core';
import { Akcja } from './akcja/akcja.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Event, EventService } from '../event.service';
import { UserEventService } from '../UserEvent.service';
import { UserService } from '../user.service';
import { AkcjaAdministrator } from './akcja-administrator/akcja-administrator.component';

/**
 * Komponent pośredniczący między widokami akcji dla wolontariusza i administratora.
 * Odpowiada za pobieranie i wyświetlanie wydarzeń w zależności od roli użytkownika.
 */
@Component({
  selector: 'app-akcje',
  standalone: true,
  imports: [Akcja, AkcjaAdministrator, RouterLink, RouterLinkActive],
  templateUrl: './akcje.component.html',
  styleUrl: './akcje.component.scss'
})
export class Akcje implements OnInit {
  /**
   * Zawiera listę wydarzeń:
   * - Dla administratora: wszystkie wydarzenia dostępne w systemie.
   * - Dla wolontariusza: wydarzenia, w których użytkownik bierze udział.
   * 
   * @type {Event[]}
   */
  events: Event[] = [];

  /**
   * Rola zalogowanego użytkownika.
   * Może przyjmować wartości: `"administrator"` lub `"wolontariusz"`.
   * @type {string}
   */
  private role: string = "";

  /**
   * Wstrzykuje wymagane serwisy: `EventService`, `UserEventService`, `UserService`.
   * 
   * @param {EventService} eventService - Serwis do zarządzania wydarzeniami.
   * @param {UserEventService} userEventService - Serwis do pobierania wydarzeń użytkownika.
   * @param {UserService} userService - Serwis do zarządzania użytkownikami i ich danymi.
   */
  constructor(
    private eventService: EventService,
    private userEventService: UserEventService,
    private userService: UserService
  ) {}

  /**
   * Inicjalizuje komponent, pobierając dane w zależności od roli użytkownika:
   * - Administrator: pobiera wszystkie wydarzenia przy użyciu `EventService`.
   * - Wolontariusz: pobiera wydarzenia, w których bierze udział użytkownik, przy użyciu `UserEventService`.
   */
  ngOnInit(): void {
    const userId = localStorage.getItem('userId'); // Pobranie ID użytkownika z localStorage.
    if (userId) {
      this.userService.getUserData(Number(userId)).subscribe(user => {
        this.role = user.role;
        if (this.role === "administrator") {
          this.eventService.getAllEvents().subscribe(events => {
            this.events = events;
          });
        } else {
          this.userEventService.getUserEvents(Number(userId)).subscribe(events => {
            this.events = events;
          });
        }
      });
    }
  }

  /**
   * Zwraca rolę zalogowanego użytkownika.
   * 
   * @returns {string} Rola użytkownika (`"administrator"` lub `"wolontariusz"`).
   */
  getRole(): string {
    return this.role;
  }
}
