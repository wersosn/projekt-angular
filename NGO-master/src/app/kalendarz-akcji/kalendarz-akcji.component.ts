import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
import { KalendarzComponent } from './kalendarz/kalendarz.component';
/**
 * @ignore
 */
@Component({
  selector: 'app-kalendarz-akcji',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, RouterLinkActive,KalendarzComponent],
  templateUrl: './kalendarz-akcji.component.html',
  styleUrl: './kalendarz-akcji.component.scss'
})
export class KalendarzAkcjiComponent {
}
