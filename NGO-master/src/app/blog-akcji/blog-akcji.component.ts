import { Component, OnInit } from '@angular/core';
import { EventService, Event } from '../event.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-akcji',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-akcji.component.html',
  styleUrl: './blog-akcji.component.scss'
})
export class BlogAkcjiComponent implements OnInit {
  events: Event[] = [];
  allEvents: Event[] = [];
  isFiltered: boolean = false;

  sortDirectionDate:  'asc' | 'desc' = 'asc';
  sortDirectionSeats: 'asc' | 'desc' = 'asc';

  activeSortByDate: boolean = false;
  activeSortBySeats: boolean = false;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.fetchAndSetEvents();
  }

  /**
   * Pobiera listę wydarzeń przy użyciu EventService
   */
  fetchAndSetEvents() {
    this.eventService.fetchEvents();
    this.eventService.events$.subscribe(events => {
      this.events = events;
      this.allEvents = [...events];
    });
  }

  sortByDate() {
    this.events.sort((a, b) => {
      const diff = new Date(a.date).getTime() - new Date(b.date).getTime();
      return this.sortDirectionDate === 'asc' ? diff : -diff;
    });
    this.sortDirectionDate = this.sortDirectionDate === 'asc' ? 'desc' : 'asc';
    this.activeSortByDate = true;
    this.activeSortBySeats = false; // Dezaktywuj sortowanie po miejscach
  }

  sortBySeats() {
    this.events.sort((a, b) => {
      const diff = a.seats - b.seats;
      return this.sortDirectionSeats === 'asc' ? diff : -diff;
    });
    this.sortDirectionSeats = this.sortDirectionSeats === 'asc' ? 'desc' : 'asc';
    this.activeSortBySeats = true;
    this.activeSortByDate = false; // Dezaktywuj sortowanie po dacie
  }

  resetOrder() {
    this.events = [...this.allEvents];
    this.activeSortByDate = false;
    this.activeSortBySeats = false; // Resetuj wszystkie sortowania
  }

  toggleFilterSeats() {
    if (this.isFiltered) {
      this.events = [...this.allEvents];
    } else {
      this.events = this.allEvents.filter(event => event.seats > 0);
    }
    this.isFiltered = !this.isFiltered;
  }
}

