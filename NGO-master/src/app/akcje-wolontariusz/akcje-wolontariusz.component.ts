import { Component } from '@angular/core';
import { AkcjaWolontariuszComponent } from './akcja-wolontariusz/akcja-wolontariusz.component';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-akcje-wolontariusz',
  standalone: true,
  imports: [AkcjaWolontariuszComponent,RouterLink,RouterLinkActive],
  templateUrl: './akcje-wolontariusz.component.html',
  styleUrl: './akcje-wolontariusz.component.scss'
})
export class AkcjeWolontariuszComponent {

}
