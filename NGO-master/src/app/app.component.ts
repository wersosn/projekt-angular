import { Component, OnInit } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  imports:[RouterOutlet, RouterLink, RouterLinkActive, FullCalendarModule],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userId: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Sprawdzamy, czy użytkownik jest zalogowany
    this.userId = localStorage.getItem('userId');
  }

  // Metoda logowania/wylogowywania
  logout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('user');
   
    this.router.navigate(['/logowanie']).then(() => {
      window.location.reload(); // Odśwież stronę po przekierowaniu
    });
  }
}
