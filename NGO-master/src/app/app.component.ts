import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { BlogAkcjiComponent } from './blog-akcji/blog-akcji.component';
import { DodajAkcjeComponent } from './dodaj-akcje/dodaj-akcje.component';



@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  imports:[BlogAkcjiComponent, RouterOutlet, RouterLink, RouterLinkActive,FullCalendarModule, DodajAkcjeComponent],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
}
