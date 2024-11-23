import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EventService, Event } from '../event.service';
import { RouterModule } from '@angular/router';  // Zaimportuj RouterModule

@Component({
  selector: 'app-strona-akcji',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './strona-akcji.component.html',
  styleUrl: './strona-akcji.component.scss'
})

export class StronaAkcjiComponent implements OnInit {
  id: number = 0;
  eventDetails: any | null = null;
  constructor(private route: ActivatedRoute, private router: Router, private eventService: EventService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.loadEventDetails(this.id);
    });
  }

  loadEventDetails(id: number) {
    this.eventService.getEventById(id).subscribe({
      next: event => {
        this.eventDetails = event; 
        console.log('Szczegóły:', this.eventDetails);
      },
      error: err => console.error('Error podczas pobierania szczegółów:', err)
    });
  }

  back() {
    this.router.navigate(['', { from: 'StronaAkcjiComponent' }]);
  }
}

  /*actions=[
    {
      id: 1,
      title: 'Akcja 1',
      location: 'Kraków',
      date: '2023-11-24',
      basicList: [
        { hour: '9:00', spots: 5 },
        { hour: '12:00', spots: 3 },
        { hour: '15:00', spots: 2 },
        { hour: '18:00', spots: 1 },
      ],
      reserveList: [
        { hour: '9:00', spots: 2 },
        { hour: '12:00', spots: 4 },
        { hour: '15:00', spots: 3 },
        { hour: '18:00', spots: 0 },
      ],
      shortDescription: 'Krótki opis akcji 1.',
      longDescription: 'Długi opis akcji 1. Szczegółowe informacje o wydarzeniu.',
    },*/

