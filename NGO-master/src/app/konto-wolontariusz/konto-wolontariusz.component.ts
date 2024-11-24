import { Component ,OnInit } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-konto-wolontariusz',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './konto-wolontariusz.component.html',
  styleUrl: './konto-wolontariusz.component.scss'
})
export class KontoWolontariuszComponent implements OnInit {
  userData: any = {}; // Zmienna przechowująca dane użytkownika

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Pobierz ID użytkownika z localStorage
    const userId = localStorage.getItem('userId');
  
    if (userId) {
      this.userService.getUserData(Number(userId)).subscribe(data => {
        this.userData = data; // Zapisz dane użytkownika do zmiennej
      });
    } else {
      console.error('Brak ID użytkownika w localStorage');
      // Możesz dodać tutaj przekierowanie na stronę logowania
    }
  }
  
}