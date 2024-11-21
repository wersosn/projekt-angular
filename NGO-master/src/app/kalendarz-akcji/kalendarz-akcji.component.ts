import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
import { KalendarzComponent } from './kalendarz/kalendarz.component';

interface Action {
  id: number;
  date: string; 
  title: string;
  description: string;
  location: string;
  status: string; 
}
@Component({
  selector: 'app-kalendarz-akcji',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, RouterLinkActive,KalendarzComponent],
  templateUrl: './kalendarz-akcji.component.html',
  styleUrl: './kalendarz-akcji.component.scss'
})
export class KalendarzAkcjiComponent {
  



}
