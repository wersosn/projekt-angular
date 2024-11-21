import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// Interfejs Event
export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
}

@Injectable({
  providedIn: 'root'
})

export class EventService {
  private eventsUrl = 'http://localhost:3000/api/events'; // Endpoint API
  private eventsSubject = new BehaviorSubject<Event[]>([]); // Strumień wydarzeń
  events$ = this.eventsSubject.asObservable(); // Subskrybowalne dane

  constructor(private http: HttpClient) { }

  // Pobranie bieżących wydarzeń (synchronicznie z BehaviorSubject)
  getEvents(): Event[] {
    return this.eventsSubject.value;
  }
  // Pobranie wydarzeń z serwera
  fetchEvents(): void {
    this.http.get<Event[]>('http://localhost:3000/api/events').subscribe(events => {
      this.eventsSubject.next(events);
    });
  }
  // Dodanie nowego wydarzenia do serwera
  addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>('http://localhost:3000/api/events', event).pipe(
      tap(newEvent => {
        const currentEvents = this.eventsSubject.value;
        this.eventsSubject.next([...currentEvents, newEvent]);
      })
    );
  }
  // Pobierz szczegóły wydarzenia na podstawie ID
  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.eventsUrl}/${id}`);
  }

}

// Stary kod
/*export class EventService {
  private eventsKey = 'events';
  private eventsSubject = new BehaviorSubject<any[]>(this.loadEventsFromStorage());

  // Strumień wydarzeń, do którego można subskrybować
  events$ = this.eventsSubject.asObservable();

  constructor() {}

  // Odczytuje wydarzenia z localStorage
  private loadEventsFromStorage(): any[] {
    const savedEvents = localStorage.getItem(this.eventsKey);
    return savedEvents ? JSON.parse(savedEvents) : [];
  }

  // Zapisuje wydarzenia do localStorage
  private saveEventsToStorage(events: any[]) {
    localStorage.setItem(this.eventsKey, JSON.stringify(events));
  }

  // Zwraca bieżące wydarzenia
  getEvents(): any[] {
    return this.eventsSubject.value;
  }

  // Dodaje nowe wydarzenie i aktualizuje localStorage
  addEvent(event: any) {
    const updatedEvents = [...this.eventsSubject.value, event];
    this.saveEventsToStorage(updatedEvents);
    this.eventsSubject.next(updatedEvents); // Uaktualniamy subskrybentów
  }
}*/
