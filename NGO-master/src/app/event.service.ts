import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { tap } from 'rxjs/operators';

// Interfejs Event
export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  seats: number;
}

@Injectable({
  providedIn: 'root'
})

export class EventService {
  private apiUrl = 'http://localhost:3000';
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
  // Pobierz wszystkie wydarzenia
  getAllEvents(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/api/events/`);
  }
  // Aktualizacja wydarzenia
  updateEvent(eventId: number, eventData: any): Observable<Event> {
    return this.http.put<Event>(`http://localhost:3000/api/events/${eventId}`, eventData);
  }
  // Usuwanie wydarzenia całkowicie
  deleteEvent(id: number): Observable<Event> {
    return this.http.delete<Event>(`${this.apiUrl}/api/events/${id}`);
  }

  // Zapisz użytkownika na wydarzenie 
  joinEvent(userId: number, eventId: number): Observable<any> {
    // Sprawdzamy, czy użytkownik nie jest już zapisany na dane wydarzenie
    return this.http.get<any>(`${this.apiUrl}/users/${userId}`).pipe(
      tap(user => {
        if (user.events.includes(eventId)) {
          alert('Już jesteś zapisany na to wydarzenie!');
          return;
        }
        user.events.push(eventId);
        this.http.put(`${this.apiUrl}/users/${userId}`, user).subscribe();
        alert('Zapisano na wydarzenie!');
        // Pobieramy dane wydarzenia
        this.http.get<any>(`${this.apiUrl}/api/events/${eventId}`).subscribe(event => {
          if (event.seats > 0) {
            // Zmniejszamy liczbę dostępnych miejsc
            event.seats -= 1;
            // Zaktualizowanie wydarzenia w backendzie
            this.http.put(`${this.apiUrl}/api/events/${eventId}`, event).subscribe();
          } else {
            alert('Brak dostępnych miejsc!');
          }
        });
      })
    );
  }
  removeEvent(userId: number, eventId: number): Observable<any> {
    // Pobieramy użytkownika
    return this.http.get<any>(`${this.apiUrl}/users/${userId}`).pipe(
      tap(user => {
        // Usuwamy eventId z listy zapisanych wydarzeń
        user.events = user.events.filter((id: number) => id !== eventId);
        
        // Zapisujemy zaktualizowanego użytkownika w backendzie
        this.http.put(`${this.apiUrl}/users/${userId}`, user).subscribe();
        
        // Pobieramy dane wydarzenia
        this.http.get<any>(`${this.apiUrl}/api/events/${eventId}`).subscribe(event => {
          // Zwiększamy liczbę dostępnych miejsc
          event.seats += 1;
          // Zaktualizowanie wydarzenia w backendzie
          this.http.put(`${this.apiUrl}/api/events/${eventId}`, event).subscribe();
        });
      })
    );
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
