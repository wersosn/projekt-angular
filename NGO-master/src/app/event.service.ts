import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { tap } from 'rxjs/operators';
/**
  @ignore
  */
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
  /**@ignore*/
  private apiUrl = 'http://localhost:3000';
  /**@ignore*/
  private eventsUrl = 'http://localhost:3000/api/events'; // Endpoint API
  /**@ignore*/
  private eventsSubject = new BehaviorSubject<Event[]>([]); // Strumień wydarzeń
  events$ = this.eventsSubject.asObservable(); // Subskrybowalne dane
  /**@ignore*/
  constructor(private http: HttpClient) { }

  /**
    * Zwraca bieżące wydarzenia (dane zapisane w BehaviorSubject)
    * @returns Event[] - Tablica wydarzeń
    */
  getEvents(): Event[] {
    return this.eventsSubject.value;
  }
  /**
   * Pobiera wydarzenia z serwera i aktualizuje BehaviorSubject
   */
  fetchEvents(): void {
    this.http.get<Event[]>('http://localhost:3000/api/events').subscribe(events => {
      this.eventsSubject.next(events);
    });
  }
  /**
 * Dodaje nowe wydarzenie do serwera i aktualizuje listę wydarzeń
 * @param event - Obiekt wydarzenia, który ma zostać dodany
 * @returns Observable<Event> - Observable zawierający dodane wydarzenie
 */
  addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>('http://localhost:3000/api/events', event).pipe(
      tap(newEvent => {
        const currentEvents = this.eventsSubject.value;
        this.eventsSubject.next([...currentEvents, newEvent]);
      })
    );
  }
  /**
  * Pobiera szczegóły wydarzenia na podstawie jego ID
  * @param id - ID wydarzenia
  * @returns Observable<Event> - Observable zawierający szczegóły wydarzenia
  */
  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.eventsUrl}/${id}`);
  }
  /**
   * Pobiera wszystkie wydarzenia
   * @returns Observable<any[]> - Observable zawierający listę wszystkich wydarzeń
   */
  getAllEvents(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/api/events/`);
  }
  /**
   * Aktualizuje dane wydarzenia na serwerze
   * @param eventId - ID wydarzenia
   * @param eventData - Dane wydarzenia do zaktualizowania
   * @returns Observable<Event> - Observable zawierający zaktualizowane wydarzenie
   */
  updateEvent(eventId: number, eventData: any): Observable<Event> {
    return this.http.put<Event>(`http://localhost:3000/api/events/${eventId}`, eventData);
  }
  /**
   * Usuwa wydarzenie z serwera
   * @param id - ID wydarzenia do usunięcia
   * @returns Observable<Event> - Observable zawierający usunięte wydarzenie
   */
  deleteEvent(id: number): Observable<Event> {
    return this.http.delete<Event>(`http://localhost:3000/api/events/${id}`);
  }

  /**
   * Zapisuje użytkownika na wydarzenie i aktualizuje dostępność miejsc
   * @param userId - ID użytkownika
   * @param eventId - ID wydarzenia
   * @returns Observable<any> - Observable zawierający wynik zapisania na wydarzenie
   */
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
  /**
  * Usuwa użytkownika z wydarzenia i aktualizuje dostępność miejsc
  * @param userId - ID użytkownika
  * @param eventId - ID wydarzenia
  * @returns Observable<any> - Observable zawierający wynik usunięcia użytkownika z wydarzenia
  */
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
