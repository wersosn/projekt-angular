import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
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

  private userUrl = 'http://localhost:3000/users'; // URL do serwera JSON

  constructor(private http: HttpClient) {}

  // Metoda do pobierania danych użytkownika po ID
  getUserData(userId: number): Observable<User> {
    return this.http.get<User>(`${this.userUrl}/${userId}`);
  }
  
}
