import { Component, Input, OnInit } from '@angular/core';
import { User, UserService } from '../../../user.service';

@Component({
  selector: 'lista-uczestnikow',
  standalone: true,
  imports: [],
  templateUrl: './lista-uczestnikow.component.html',
  styleUrl: './lista-uczestnikow.component.scss'
})
export class ListaUczestnikow implements OnInit {
  /**
   * Id wybranego wydarzenia
   */
  @Input() eventId: number | any;
  /**
   * Lista uczestników wybranego wydarzenia
   */
  users: User[] = [];

  /**
   * Wstrzykuje serwis `UserService`
   */
  constructor(private userService: UserService) {}

  /**
   * Pobiera użytkowników przy użyciu `EventService`
   */
  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      users.forEach(user => {
        if(user.events.includes(this.eventId)){
          this.users.push(user);
        }
      });
    });
  }
}
