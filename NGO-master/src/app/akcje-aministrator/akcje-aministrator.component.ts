import { Component } from '@angular/core';
import { AkcjaAministratorComponent } from './akcja-aministrator/akcja-aministrator.component';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-akcje-aministrator',
  standalone: true,
  imports: [AkcjaAministratorComponent,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './akcje-aministrator.component.html',
  styleUrl: './akcje-aministrator.component.scss'
})
export class AkcjeAministratorComponent {

}
