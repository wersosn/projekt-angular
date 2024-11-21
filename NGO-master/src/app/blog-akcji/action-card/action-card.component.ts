import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.scss'],
  imports:[RouterOutlet,RouterLink,RouterLinkActive, CommonModule],
  standalone: true
})
export class ActionCardComponent {
  actions= [
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
    },
    {
      id: 2,
      title: 'Akcja 2',
      location: 'Warszawa',
      date: '2023-11-25',
      basicList: [
        { hour: '9:00', spots: 4 },
        { hour: '12:00', spots: 6 },
        { hour: '15:00', spots: 0 },
        { hour: '18:00', spots: 2 },
      ],
      reserveList: [
        { hour: '9:00', spots: 1 },
        { hour: '12:00', spots: 2 },
        { hour: '15:00', spots: 5 },
        { hour: '18:00', spots: 3 },
      ],
      shortDescription: 'Krótki opis akcji 2.',
      longDescription: 'Długi opis akcji 2. Więcej szczegółów dotyczących wydarzenia.',
    },
    {
      id: 3,
      title: 'Akcja 3',
      location: 'Gdańsk',
      date: '2023-11-26',
      basicList: [
        { hour: '9:00', spots: 7 },
        { hour: '12:00', spots: 2 },
        { hour: '15:00', spots: 4 },
        { hour: '18:00', spots: 0 },
      ],
      reserveList: [
        { hour: '9:00', spots: 3 },
        { hour: '12:00', spots: 5 },
        { hour: '15:00', spots: 2 },
        { hour: '18:00', spots: 1 },
      ],
      shortDescription: 'Krótki opis akcji 3.',
      longDescription: 'Długi opis akcji 3. Informacje o wydarzeniu w Gdańsku.',
    },
    {
      id: 4,
      title: 'Akcja 4',
      location: 'Poznań',
      date: '2023-11-27',
      basicList: [
        { hour: '9:00', spots: 2 },
        { hour: '12:00', spots: 3 },
        { hour: '15:00', spots: 1 },
        { hour: '18:00', spots: 6 },
      ],
      reserveList: [
        { hour: '9:00', spots: 0 },
        { hour: '12:00', spots: 1 },
        { hour: '15:00', spots: 4 },
        { hour: '18:00', spots: 2 },
      ],
      shortDescription: 'Krótki opis akcji 4.',
      longDescription: 'Długi opis akcji 4. Szczegóły wydarzenia w Poznaniu.',
    },
    {
      id: 5,
      title: 'Akcja 5',
      location: 'Łódź',
      date: '2023-11-28',
      basicList: [
        { hour: '9:00', spots: 0 },
        { hour: '12:00', spots: 8 },
        { hour: '15:00', spots: 3 },
        { hour: '18:00', spots: 5 },
      ],
      reserveList: [
        { hour: '9:00', spots: 6 },
        { hour: '12:00', spots: 4 },
        { hour: '15:00', spots: 1 },
        { hour: '18:00', spots: 0 },
      ],
      shortDescription: 'Krótki opis akcji 5.',
      longDescription: 'Długi opis akcji 5. Informacje o wydarzeniu w Łodzi.',
    },
    {
      id: 6,
      title: 'Akcja 6',
      location: 'Wrocław',
      date: '2023-11-29',
      basicList: [
        { hour: '9:00', spots: 10 },
        { hour: '12:00', spots: 5 },
        { hour: '15:00', spots: 8 },
        { hour: '18:00', spots: 2 },
      ],
      reserveList: [
        { hour: '9:00', spots: 3 },
        { hour: '12:00', spots: 2 },
        { hour: '15:00', spots: 0 },
        { hour: '18:00', spots: 4 },
      ],
      shortDescription: 'Krótki opis akcji 6.',
      longDescription: 'Długi opis akcji 6. Więcej informacji o wydarzeniu we Wrocławiu.',
    },
  ];
  
}
