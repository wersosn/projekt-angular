import { Component, OnInit } from '@angular/core';
import { ActionCardComponent } from './action-card/action-card.component';
import { EventService } from '../event.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-blog-akcji',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-akcji.component.html',
  styleUrl: './blog-akcji.component.scss'
})

export class BlogAkcjiComponent implements OnInit {
  events: any[] = []; // Eventy

  // Konstruktor, w którym wstrzykiwany jest serwis EventService
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.fetchEvents(); // Pobieranie wydarzenia z serwera
    this.eventService.events$.subscribe(events => { // Przypisanie pobranych wydarzeń do lokalnej tablicy events
      this.events = events;
    });
  }

  // Funkcja trackBy, która wykorzystuje unikalny identyfikator (id) elementu
  trackById(index: number, event: any): number {
    return event.id;
  }
}
