import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // Sprawdź, czy `userId` istnieje w `localStorage`
    const userId = localStorage.getItem('userId');

    if (userId) {
      return true; // Użytkownik jest zalogowany, zezwól na dostęp
    } else {
      // Użytkownik nie jest zalogowany, przekieruj na stronę logowania
      this.router.navigate(['logowanie-component']);
      return false;
    }
  }
}
