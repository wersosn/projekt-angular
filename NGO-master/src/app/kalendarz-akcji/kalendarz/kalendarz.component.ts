import { Component } from '@angular/core';
import { KalendarzAkcjiComponent } from '../kalendarz-akcji.component';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core'; 
import { FullCalendarModule } from '@fullcalendar/angular';
@Component({
  selector: 'app-kalendarz',
  standalone: true,
  imports: [KalendarzAkcjiComponent,FullCalendarModule],
  templateUrl: './kalendarz.component.html',
  styleUrl: './kalendarz.component.scss'
})
export class KalendarzComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };
}
