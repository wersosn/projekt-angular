import { Component } from '@angular/core';

@Component({
  selector: 'app-akcja-administrator',
  standalone: true,
  imports: [],
  templateUrl: './akcja-administrator.component.html',
  styleUrl: './akcja-administrator.component.scss'
})
export class AkcjaAdministratorComponent {
 actions = [
    {
      id: 1,
      title: 'Akcja 1',
      location: 'Kraków',
      date: '2023-11-24',
      basicList: [
        { id: 1, hour: '9:00', spots: 0 },
        { id: 2, hour: '12:00', spots: 3 },
        { id: 3, hour: '15:00', spots: 2 },
        { id: 4, hour: '18:00', spots: 1 },
      ],
      reserveList: [
        { id: 5, hour: '9:00', spots: 2 },
        { id: 6, hour: '12:00', spots: 4 },
        { id: 7, hour: '15:00', spots: 3 },
        { id: 8, hour: '18:00', spots: 0 },
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
        { id: 1, hour: '9:00', spots: 4 },
        { id: 2, hour: '12:00', spots: 6 },
        { id: 3, hour: '15:00', spots: 0 },
        { id: 4, hour: '18:00', spots: 2 },
      ],
      reserveList: [
        { id: 5, hour: '9:00', spots: 1 },
        { id: 6, hour: '12:00', spots: 2 },
        { id: 7, hour: '15:00', spots: 5 },
        { id: 8, hour: '18:00', spots: 3 },
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
        { id: 1, hour: '9:00', spots: 7 },
        { id: 2, hour: '12:00', spots: 2 },
        { id: 3, hour: '15:00', spots: 4 },
        { id: 4, hour: '18:00', spots: 0 },
      ],
      reserveList: [
        { id: 5, hour: '9:00', spots: 3 },
        { id: 6, hour: '12:00', spots: 5 },
        { id: 7, hour: '15:00', spots: 2 },
        { id: 8, hour: '18:00', spots: 1 },
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
        { id: 1, hour: '9:00', spots: 2 },
        { id: 2, hour: '12:00', spots: 3 },
        { id: 3, hour: '15:00', spots: 1 },
        { id: 4, hour: '18:00', spots: 6 },
      ],
      reserveList: [
        { id: 5, hour: '9:00', spots: 0 },
        { id: 6, hour: '12:00', spots: 1 },
        { id: 7, hour: '15:00', spots: 4 },
        { id: 8, hour: '18:00', spots: 2 },
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
        { id: 1, hour: '9:00', spots: 0 },
        { id: 2, hour: '12:00', spots: 8 },
        { id: 3, hour: '15:00', spots: 3 },
        { id: 4, hour: '18:00', spots: 5 },
      ],
      reserveList: [
        { id: 5, hour: '9:00', spots: 6 },
        { id: 6, hour: '12:00', spots: 4 },
        { id: 7, hour: '15:00', spots: 1 },
        { id: 8, hour: '18:00', spots: 0 },
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
        { id: 1, hour: '9:00', spots: 10 },
        { id: 2, hour: '12:00', spots: 5 },
        { id: 3, hour: '15:00', spots: 8 },
        { id: 4, hour: '18:00', spots: 2 },
      ],
      reserveList: [
        { id: 5, hour: '9:00', spots: 3 },
        { id: 6, hour: '12:00', spots: 2 },
        { id: 7, hour: '15:00', spots: 0 },
        { id: 8, hour: '18:00', spots: 4 },
      ],
      shortDescription: 'Krótki opis akcji 6.',
      longDescription: 'Długi opis akcji 6. Więcej informacji o wydarzeniu we Wrocławiu.',
    },
  ];
  
}
