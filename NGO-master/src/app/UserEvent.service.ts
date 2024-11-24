import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserEventService {
  private apiUrl = 'http://localhost:3000'; // Twój backend

  constructor(private http: HttpClient) {}

  // Pobieranie wydarzeń użytkownika na podstawie ID
  getUserEvents(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users/${userId}/events`);
  }
  
}
