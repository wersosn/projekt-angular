import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AkcjaComponent } from '../akcja/akcja.component';
import { ListaUczestnikowComponent } from './lista-uczestnikow/lista-uczestnikow.component';
import { DodajUczestnikaComponent } from "./dodaj-uczestnika/dodaj-uczestnika.component";
import { UsunUczestnikaComponent } from "./usun-uczestnika/usun-uczestnika.component";
import { User } from '../../user.service';
import { SzukajUczestnikaComponent } from "./szukaj-uczestnika/szukaj-uczestnika.component";

@Component({
  selector: 'akcja-administrator',
  standalone: true,
  imports: [RouterModule, ListaUczestnikowComponent, DodajUczestnikaComponent, UsunUczestnikaComponent, SzukajUczestnikaComponent],
  templateUrl: './akcja-administrator.component.html',
  styleUrl: './akcja-administrator.component.scss'
})
export class AkcjaAdministratorComponent extends AkcjaComponent {
  listVisible: boolean = false;
  removeVisible: boolean = false;
  addVisible: boolean = false;

  users: User[] = [];

  toggleList():void {
    this.removeVisible = false;
    this.addVisible = false;
    this.listVisible = !this.listVisible;
  }
  toggleRemove():void {
    this.listVisible = false;
    this.addVisible = false;
    this.removeVisible = !this.removeVisible;
  }
  toggleAdd():void {
    this.removeVisible = false;
    this.listVisible = false;
    this.addVisible = !this.addVisible;
  }

  findUsers(users: User[]): void {
    this.users = users;
  }

  trackUsersId() {
    return this.event.id;
  }
}