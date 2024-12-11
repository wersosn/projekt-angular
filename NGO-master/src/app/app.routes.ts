import { Routes } from '@angular/router';
import { BlogAkcji } from './blog-akcji/blog-akcji.component';
import { Kalendarz } from './kalendarz/kalendarz.component';
import { Rejestracja } from './rejestracja/rejestracja.component';
import { Logowanie } from './logowanie/logowanie.component';
import { Konto } from './konto/konto.component';
import { Akcje } from './akcje/akcje.component';
import { StronaAkcji } from './strona-akcji/strona-akcji.component';
import { DodajAkcje } from './dodaj-akcje/dodaj-akcje.component';
import { EdytujAkcje } from './edytuj-akcje/edytuj-akcje.component';
import { AuthGuard } from './auth.guard';
export  const routes: Routes = [
   { path: '',                     component: BlogAkcji }, 
   { path: 'akcje/szczegóły/:id',  component: StronaAkcji },  
   { path: 'kalendarz',            component: Kalendarz },
   { path: 'rejestracja',          component: Rejestracja },  
   { path: 'logowanie',            component: Logowanie },  
   { path: 'konto',                component: Konto, canActivate: [AuthGuard] },
   { path: 'akcje',                component: Akcje, canActivate: [AuthGuard] },
   { path: 'akcje/dodaj',          component: DodajAkcje },
   { path: 'akcje/edytuj/:id',     component: EdytujAkcje },
   { path: '**',                   redirectTo: 'logowanie' }
];
   //