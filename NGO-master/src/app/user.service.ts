import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
/**
 @ignore
 */
export interface User {
  id: number;
  role: string;
  login: string;
  password: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
  address: string;
  gender: string;
  events: number[];
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /**
     * Domyślne opcje kalendarza
     */
  private userUrl = 'http://localhost:3000/users'; // URL do serwera JSON
 /**@ignore*/
  constructor(private http: HttpClient) { }
  /**
   * Pobiera wszystkich użytkowników z backendu
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.userUrl}`);
  }

  /**
  * Pobiera dane użytkownika na podstawie jego ID
  */
  getUserData(userId: number): Observable<User> {
    return this.http.get<User>(`${this.userUrl}/${userId}`);
  }
  /**
   * Pobiera szczegóły użytkownika, w tym jego ID, rolę, login oraz email
   */
  getUserDetails(userId: string): Observable<{ id: number; role: string; login: string; email: string }> {
    return this.http.get<{ id: number; role: string; login: string; email: string }>(`${this.userUrl}/users/${userId}`);
  }
}
