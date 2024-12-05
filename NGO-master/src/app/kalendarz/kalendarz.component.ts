import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { CalendarOptions } from '@fullcalendar/core'; 
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarModule } from '@fullcalendar/angular';
import { EventService, Event } from '../event.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-kalendarz',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './kalendarz.component.html',
  styleUrl: './kalendarz.component.scss'
})
// TODO Zmienić kolejność dni tygodnia (na normalną)
// TODO Dodać zmianę view na widok jednego dnia w handleDateClick ???
// TODO W przyszłości filtry na wszystkie wydarzenia i te w których użytkownik bierze udział
export class Kalendarz implements OnInit{
  /**
   * @ignore
   */
  events: Event[] = [];
  /**
   * Sformatowane wydarzenia do wyświetlenia w kalendarzu
   */
  calendarEvents: any[] = [];
  /**
   * Domyślne opcje kalendarza
   */
  calendarOptions: CalendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      //dateClick: (arg) => this.handleDateClick(arg),
      eventClick: (arg) => this.handleEventClick(arg),
      events: []
    };

  /**
   * Wstrzykuje serwisy: EventService, Router
   */
  constructor(private eventService: EventService, private router: Router) { }
  
  /**
   * Pobiera listę wydarzeń przy użyciu EventService i formatuje wyświetlanie ich w kalendarzu
   */
  ngOnInit(): void {
    this.eventService.fetchEvents();
    this.eventService.events$.subscribe(events => { // Przypisanie pobranych wydarzeń do lokalnej tablicy events
      this.events = events;
      this.calendarEvents = [];
      this.events.forEach(event => {
        let eventTitle = event.title + ' - ' + event.time;
        this.calendarEvents.push({id: event.id, title: eventTitle, date: event.date});
      });
      this.calendarOptions.events = [...this.calendarEvents];
    });

  }

  /*
  handleDateClick(date:any) {
    console.log(date);
  }*/

  /**
   * Przechodzi na stronę szczegółów akcji
   */
  handleEventClick(event: any) {
    this.router.navigateByUrl(`akcje/szczegóły/${event.event._def.publicId}`)
  }
  
}
