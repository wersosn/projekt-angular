import { Routes } from '@angular/router';
import { BlogAkcjiComponent } from './blog-akcji/blog-akcji.component';
import { KalendarzAkcjiComponent } from './kalendarz-akcji/kalendarz-akcji.component';
import { RejestracjaComponent } from './rejestracja/rejestracja.component';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { KontoWolontariuszComponent } from './konto-wolontariusz/konto-wolontariusz.component';
import { AkcjeComponent } from './akcje/akcje.component';
import { KontaAministratorComponent } from './konta-aministrator/konta-aministrator.component';
import { StronaAkcjiComponent } from './strona-akcji/strona-akcji.component';
import { DodajAkcjeComponent } from './dodaj-akcje/dodaj-akcje.component';
import { EdytujAkcjeComponent } from './edytuj-akcje/edytuj-akcje.component';
import { AuthGuard } from './auth.guard';
 export  const routes: Routes = [
    { path: '', component: BlogAkcjiComponent }, 
    { path: 'szczegóły-akcji/:id', component: StronaAkcjiComponent },  
    { path: 'kalendarz-akcji-component', component: KalendarzAkcjiComponent },
    { path: 'rejestracja-component', component: RejestracjaComponent },  
    { path: 'logowanie-component', component: LogowanieComponent },  
    { path: 'konto-wolontariusza', component: KontoWolontariuszComponent ,canActivate: [AuthGuard]},
    { path: 'akcje', component: AkcjeComponent,canActivate: [AuthGuard] },
    { path: 'konta-administrator', component: KontaAministratorComponent,canActivate: [AuthGuard] },  
    { path: 'dodaj-akcje', component: DodajAkcjeComponent },
    { path: 'edytuj-akcje/:id', component: EdytujAkcjeComponent },
    { path: '**', redirectTo: 'logowanie-component' }
   ];
   //