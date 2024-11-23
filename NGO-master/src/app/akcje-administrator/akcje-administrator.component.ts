import { Component } from '@angular/core';
import { AkcjaAdministratorComponent } from './akcja-administrator/akcja-administrator.component';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-akcje-administrator',
  standalone: true,
  imports: [AkcjaAdministratorComponent,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './akcje-administrator.component.html',
  styleUrl: './akcje-administrator.component.scss'
})
export class AkcjeAdministratorComponent {

}
