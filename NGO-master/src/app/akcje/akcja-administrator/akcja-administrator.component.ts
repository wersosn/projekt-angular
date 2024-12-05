import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Akcja } from '../akcja/akcja.component';
import { ListaUczestnikow } from './lista-uczestnikow/lista-uczestnikow.component';
import { DodajUczestnika } from "./dodaj-uczestnika/dodaj-uczestnika.component";
import { UsunUczestnika } from "./usun-uczestnika/usun-uczestnika.component";
import { User } from '../../user.service';
import { SzukajUczestnika } from "./szukaj-uczestnika/szukaj-uczestnika.component";
/**
 * Komponent `AkcjaAdministrator` wyświetla wszystkie akcje oraz udostępnia narzędzia dla administratora do zarządzania akcjami.
 */
@Component({
  selector: 'akcja-administrator',
  standalone: true,
  imports: [RouterModule, ListaUczestnikow, DodajUczestnika, UsunUczestnika, SzukajUczestnika],
  templateUrl: './akcja-administrator.component.html',
  styleUrl: './akcja-administrator.component.scss'
})
export class AkcjaAdministrator extends Akcja {
  /** @ignore */
  listVisible: boolean = false;
  /** @ignore */
  removeVisible: boolean = false;
  /** @ignore */
  addVisible: boolean = false;
  /**@ignore*/
  users: User[] = [];
  /** @ignore */
  toggleList(): void {
    this.removeVisible = false;
    this.addVisible = false;
    this.listVisible = !this.listVisible;
  }
  /** @ignore */
  toggleRemove(): void {
    this.listVisible = false;
    this.addVisible = false;
    this.removeVisible = !this.removeVisible;
  }
  /** @ignore */
  toggleAdd(): void {
    this.removeVisible = false;
    this.listVisible = false;
    this.addVisible = !this.addVisible;
  }

  /** @ignore */
  findUsers(users: User[]): void {
    this.users = users;
  }
}