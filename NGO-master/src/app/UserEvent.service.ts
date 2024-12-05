import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
/**
   Pobiera wydarzenia przypisane do konkretnego użytkownika
   */
@Injectable({
  providedIn: 'root'
})
export class UserEventService {
  /**
   @ignore
    */
  private apiUrl = 'http://localhost:3000';
  /**
    @ignore
     */
  constructor(private http: HttpClient) { }
  /**
    * Metoda pobierająca wydarzenia przypisane do konkretnego użytkownika
    * @param userId - ID użytkownika, dla którego chcemy pobrać wydarzenia
    * @returns Observable<any> - Obiekt Observable, który emituje odpowiedź z serwera
    */

  getUserEvents(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users/${userId}/events`);
  }

}
