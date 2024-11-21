import { Routes } from '@angular/router';
import { BlogAkcjiComponent } from './blog-akcji/blog-akcji.component';
import { KalendarzAkcjiComponent } from './kalendarz-akcji/kalendarz-akcji.component';
import { RejestracjaComponent } from './rejestracja/rejestracja.component';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { KontoWolontariuszComponent } from './konto-wolontariusz/konto-wolontariusz.component';
import { AkcjeWolontariuszComponent } from './akcje-wolontariusz/akcje-wolontariusz.component';
import { AkcjeAministratorComponent } from './akcje-aministrator/akcje-aministrator.component';
import { KontaAministratorComponent } from './konta-aministrator/konta-aministrator.component';
import { StronaAkcjiComponent } from './strona-akcji/strona-akcji.component';
import { DodajAkcjeComponent } from './dodaj-akcje/dodaj-akcje.component';

 export  const routes: Routes = [
    { path: '', component: BlogAkcjiComponent }, 
    { path: 'szczegóły-akcji/:id', component: StronaAkcjiComponent },  
    { path: 'kalendarz-akcji-component', component: KalendarzAkcjiComponent },
    { path: 'rejestracja-component', component: RejestracjaComponent },  
    { path: 'logowanie-component', component: LogowanieComponent },  
    { path: 'konto-wolontariusza', component: KontoWolontariuszComponent },
    { path: 'akcje-wolontariusza', component: AkcjeWolontariuszComponent },
    { path: 'akcje-administratora', component: AkcjeAministratorComponent },  
    { path: 'konta-administrator', component: KontaAministratorComponent },  
    { path: 'dodaj-akcje', component: DodajAkcjeComponent } 
   ];
   //