import { Component, OnInit } from '@angular/core';
import { KalendarzAkcjiComponent } from '../kalendarz-akcji.component';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { CalendarOptions } from '@fullcalendar/core'; 
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarModule } from '@fullcalendar/angular';
import { EventService } from '../../event.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-kalendarz',
  standalone: true,
  imports: [KalendarzAkcjiComponent,FullCalendarModule],
  templateUrl: './kalendarz.component.html',
  styleUrl: './kalendarz.component.scss'
})
// TODO Zmienić kolejność dni tygodnia (na normalną)
// TODO Dodać zmianę view? na widok jednego dnia w handleDateClick
// TODO W przyszłości filtry na wszystkie wydarzenia i te w których użytkownik bierze udział
export class KalendarzComponent implements OnInit{
  events: any[] = [];
  calendarEvents: any[] = [];

  calendarOptions: CalendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      dateClick: (arg) => this.handleDateClick(arg),
      eventClick: (arg) => this.handleEventClick(arg),
      events: [ ]
    };

  // Konstruktor, w którym wstrzykiwany jest serwis EventService i Router
  constructor(private eventService: EventService, private router: Router) { }
  
  ngOnInit(): void {
    this.eventService.fetchEvents(); // Pobieranie wydarzenia z serwera
    this.eventService.events$.subscribe(events => { // Przypisanie pobranych wydarzeń do lokalnej tablicy events
      this.events = events;
      this.calendarEvents = [];
      this.events.forEach(event => {
        let eventTitle = event.title + ' - ' + event.time;
        this.calendarEvents.push({id: event.id, title: eventTitle, date: event.date, color: event.color});
      });
      this.calendarOptions.events = [...this.calendarEvents];
    });

  }

  handleDateClick(date:any) {
    console.log(date);
  }

  handleEventClick(event:any) {
    this.router.navigateByUrl(`szczegóły-akcji/${event.event._def.publicId}`)
  }
  
}
