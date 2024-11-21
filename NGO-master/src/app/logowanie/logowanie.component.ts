import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-logowanie',
  standalone: true,
  imports: [ RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './logowanie.component.html',
  styleUrl: './logowanie.component.scss'
})
export class LogowanieComponent {

}
