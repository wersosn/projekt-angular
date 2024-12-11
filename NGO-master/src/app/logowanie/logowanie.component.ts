import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
/**
  Komponent odpowiedzialny za logowanie do konta wolontariusza/administratora
   */
@Component({
  selector: 'app-logowanie',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './logowanie.component.html',
  styleUrl: './logowanie.component.scss'
})
export class Logowanie {
  /**@ignore*/
  loginForm: FormGroup;

  /**@ignore*/
  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) {
    // Tworzenie formularza z dwoma polami: login i password, oba są wymagane
    this.loginForm = this.fb.group({
      login: new FormControl('', Validators.required),  // Pole login, wymagane
      password: new FormControl('', Validators.required)  // Pole password, wymagane
    });
  }

  /**
   * Metoda logowania, która jest wywoływana po zatwierdzeniu formularza.
   * Sprawdza poprawność formularza, a następnie wysyła zapytanie POST do backendu.
   */
  login() {
    if (this.loginForm.valid) {
      // Wysyłanie danych logowania do backendu (adres URL API logowania)
      this.http.post('http://localhost:3000/login', this.loginForm.value).subscribe({
        next: (response: any) => {
          // Jeżeli logowanie zakończyło się sukcesem, wyświetlamy komunikat i zapisujemy dane użytkownika
          console.log('Zalogowano pomyślnie');
          alert(response.message);  // Wyświetlenie komunikatu zwrotnego

          // Zapisujemy dane użytkownika w localStorage
          localStorage.setItem('userId', response.user.id);  // Zapisz ID użytkownika
          localStorage.setItem('userLogin', response.user.login);  // Zapisz login użytkownika
          localStorage.setItem('userRole', response.user.role);  // Zapisz rolę użytkownika

          // Przekierowanie do strony konta po zalogowaniu
          this.router.navigate(['/konto']).then(() => {
            window.location.reload();  // Odśwież stronę po przekierowaniu
          });
        },
        error: err => {
          // Obsługa błędu logowania
          console.error('Błąd logowania:', err);
          alert(err.error.message);  // Wyświetlenie komunikatu o błędzie
        }
      });
    }
  }
}
