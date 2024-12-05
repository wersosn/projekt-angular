import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../user.service';
/**
   * Wypisuje dane użytkownika na jego stronie z danymi osobowymi
   */
@Component({
  selector: 'app-konto',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './konto.component.html',
  styleUrl: './konto.component.scss'
})
export class Konto implements OnInit {
  /**
   * Dane użytkownika
   */
  userData: any = {};

  /**
   * Wstrzykuje UserService
   */
  constructor(private userService: UserService, private router: Router) { }

  /**
   * Pobiera Id użytkownika z localStorage. Jeśli użytkownik jest zalogowany, 
   * pobiera dane z UserService i zapisuje do zmiennej `userData`.
   * W przeciwnym wypadku przekierowuje na stronę logowania.
   */
  ngOnInit(): void {
    // Pobierz ID użytkownika z localStorage
    const userId = localStorage.getItem('userId');

    if (userId) {
      this.userService.getUserData(Number(userId)).subscribe(data => {
        this.userData = data; // Zapisz dane użytkownika do zmiennej
      });
    } else {
      console.error('Brak ID użytkownika w localStorage');
      this.router.navigate(['logowanie']);
    }
  }

}