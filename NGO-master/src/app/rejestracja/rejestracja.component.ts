import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
/**
  Komponent do rejestracji wolontariuszy na strone.
   */
@Component({
  selector: 'app-rejestracja',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './rejestracja.component.html',
  styleUrl: './rejestracja.component.scss'
})
export class Rejestracja {
  /**
  @ignore
   */
  registerForm: FormGroup;
  /**
    @ignore
     */
  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient,) {
    this.registerForm = this.fb.group({
      login: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{9}')]],
      address: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  /**
  * Funkcja wysyłająca dane formularza do serwera
  * Jeśli formularz jest prawidłowy, wysyła dane do API.
  */
  register() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value)
      this.http.post('http://localhost:3000/register', this.registerForm.value).subscribe({
        next: (response) => {
          alert('Rejestracja zakończona sukcesem!');
          this.router.navigate(['/logowanie']);
        },
        error: (error) => {
          alert('Błąd rejestracji: ' + error.message);
        }
      })
    }
  }
}
