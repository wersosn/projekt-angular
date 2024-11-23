import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// Interfejs User
export interface User {
  id: number;
  name: string;
  surname: string;
}

// Interfejs Group
export interface Group {
  id: number;
  type: string;
  name: string;
  size: number;
  time: string;
  users: User[];
}

// Interfejs Event
export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  seats: number;
  groups: Group[];
}

@Injectable({
  providedIn: 'root'
})

export class EventService {
  private eventsUrl = 'http://localhost:3000/api/events'; // Endpoint API
  private groupsUrl = 'groups';
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
  // Aktualizacja wydarzenia
  updateEvent(eventId: number, eventData: any): Observable<Event> {
    return this.http.put<Event>(`http://localhost:3000/api/events/${eventId}`, eventData);
  } 

  // Pobranie grup dla konkretnego wydarzenia na podstawie ID (synchronicznie z BehaviorSubject)
  getGroups(eventId: number): Group[] | undefined {
    return this.eventsSubject.value.find(e => e.id === eventId)?.groups;
  }
  // Pobieranie konkretnej grupy dla konkretnego wydarzenia na podstawie ID
  getGroupById(eventId: number, groupId: number): Observable<Group> {
    return this.http.get<Group>(`${this.eventsUrl}/${eventId}/${this.groupsUrl}/${groupId}`);
  }
  // Dodanie nowego wydarzenia do serwera
  addGroup(eventId: number, group: Group): Observable<Group> {
    return this.http.post<Group>(`${this.eventsUrl}/${eventId}/${this.groupsUrl}`, group).pipe(
      tap(newGroup => {
        const currentEventGroups = this.eventsSubject.value.find(e => e.id === eventId)?.groups;
        // TODO Dodać grupę do eventu
        // Nie wiem jak to zrobić, może jak tego nie poprawicie i wszystko skończe to usiąde nad tym
        //this.eventsSubject.next([...currentEventGroups, newGroup]);
      })
    );
  }
  // Aktualizacja grupy
  updateGroup(eventId: number, groupId: number, groupData: any): Observable<Event> {
    return this.http.put<Event>(`${this.eventsUrl}/${eventId}/${this.groupsUrl}/${groupId}`, groupData);
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
