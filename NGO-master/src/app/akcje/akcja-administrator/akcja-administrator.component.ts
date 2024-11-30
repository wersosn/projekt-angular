import { Component,Input,OnInit  } from '@angular/core';
import { UserEventService } from '../../UserEvent.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EventService } from '../../event.service';
import { AkcjaComponent } from '../akcja/akcja.component';
@Component({
  selector: 'akcja-administrator',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './akcja-administrator.component.html',
  styleUrl: './akcja-administrator.component.scss'
})
export class AkcjaAdministratorComponent extends AkcjaComponent {
}