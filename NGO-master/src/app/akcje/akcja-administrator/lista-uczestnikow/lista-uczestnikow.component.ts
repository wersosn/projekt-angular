import { Component, Input } from '@angular/core';

@Component({
  selector: 'lista-uczestnikow',
  standalone: true,
  imports: [],
  templateUrl: './lista-uczestnikow.component.html',
  styleUrl: './lista-uczestnikow.component.scss'
})
export class ListaUczestnikowComponent {
  @Input() event: any;
}
