import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-logowanie',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './logowanie.component.html',
  styleUrl: './logowanie.component.scss'
})
export class LogowanieComponent {
  loginForm: FormGroup;

  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  // Metoda logowania
  login() {
    if (this.loginForm.valid) {
      this.http.post('http://localhost:3000/login', this.loginForm.value).subscribe({
        next: (response: any) => {
          console.log('Zalogowano pomyślnie');
          alert(response.message);
          
          // Zapisz dane użytkownika w localStorage
          localStorage.setItem('userId', response.user.id); // Zapisz ID użytkownika
          localStorage.setItem('userLogin', response.user.login); // Zapisz login użytkownika
          localStorage.setItem('userRole', response.user.role);
        
          // Przekierowanie po zalogowaniu
          this.router.navigate(['/konto-wolontariusza']).then(() => {
            window.location.reload(); // Odśwież stronę po przekierowaniu
          });
        },
        error: err => {
          console.error('Błąd logowania:', err);
          alert(err.error.message);
        }
      });
    }
  }



}
