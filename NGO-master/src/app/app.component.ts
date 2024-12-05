import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { Router } from '@angular/router';

/**
 * Komponent główny aplikacji, który zawiera logikę logowania oraz wylogowywania.
 * Obsługuje również sprawdzanie, czy użytkownik jest zalogowany oraz przechowuje jego identyfikator.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FullCalendarModule],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /**@ignore */
  userId: string | null = null;

  /**@ignore */
  constructor(private router: Router) { }

  /**
   * Inicjalizuje komponent, sprawdzając, czy użytkownik jest zalogowany poprzez odczytanie jego identyfikatora z `localStorage`.
   */
  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
  }

  /**
   * Metoda logowania/wylogowywania.
   * Usuwa dane użytkownika z `localStorage` i przekierowuje użytkownika na stronę logowania.
   * Po przekierowaniu strona zostaje odświeżona.
   */
  logout() {
    // Usuwamy dane użytkownika z localStorage
    localStorage.removeItem('userId');
    localStorage.removeItem('user');

    // Przekierowujemy na stronę logowania i odświeżamy stronę
    this.router.navigate(['/logowanie']).then(() => {
      window.location.reload(); // Odświeżenie strony po przekierowaniu
    });
  }
}
