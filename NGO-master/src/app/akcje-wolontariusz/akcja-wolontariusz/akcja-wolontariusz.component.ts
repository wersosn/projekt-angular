import { Component } from '@angular/core';

@Component({
  selector: 'app-akcja-wolontariusz',
  standalone: true,
  imports: [],
  templateUrl: './akcja-wolontariusz.component.html',
  styleUrl: './akcja-wolontariusz.component.scss'
})
export class AkcjaWolontariuszComponent {
  Zapisy= [
    {
      id: 1,
      title: 'Akcja 1',
      location: 'Kraków',
      date: '2023-11-24',
      list: 'Postawowa',
      time:'9:00',
      shortDescription: 'Krótki opis akcji 1.',
    
    },
    {
      id: 2,
      title: 'Akcja 2',
      location: 'Warszawa',
      date: '2023-11-25',
      list: 'Postawowa',
      time:'15:00',
      shortDescription: 'Krótki opis akcji 2.',
    
    },
    {
      id: 3,
      title: 'Akcja 3',
      location: 'Gdańsk',
      date: '2023-11-26',
      list: 'Rezerwowa',
      time:'18:00',
      shortDescription: 'Krótki opis akcji 3.',

    },
    {
      id: 4,
      title: 'Akcja 4',
      location: 'Poznań',
      date: '2023-11-27',
     list: 'Rezerwowa',
     time:'12:00',
      shortDescription: 'Krótki opis akcji 4.',
     
    },
    {
      id: 5,
      title: 'Akcja 5',
      location: 'Łódź',
      date: '2023-11-28',
     list: 'Rezerwowa',
     time:'12:00',
      shortDescription: 'Krótki opis akcji 5.',
    
    },
    {
      id: 6,
      title: 'Akcja 6',
      location: 'Wrocław',
      date: '2023-11-29',
    list: 'Rezerwowa',
    time:'15:00',
      shortDescription: 'Krótki opis akcji 6.',
     
    },
  ];
  
 

  editTime(event: Event) {
    event.stopPropagation();
    console.log('Zmiana godziny zapisu');
  }

  cancel(event: Event) {
    event.stopPropagation();
    console.log('Rezygnacja');
  }
}
