import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

/**
 * Guard, który chroni dostęp do określonych tras w aplikacji. 
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  /**
  @ignore
   */
  constructor(private router: Router) { }

  /**
   * Sprawdza, czy użytkownik ma dostęp do żądanej trasy.
   * @returns {boolean} - Zwraca `true` jeśli użytkownik jest zalogowany, w przeciwnym razie `false`.
   */
  canActivate(): boolean {

    const userId = localStorage.getItem('userId');

    if (userId) {
      return true;
    } else {
      this.router.navigate(['logowanie']);
      return false;
    }
  }
}
