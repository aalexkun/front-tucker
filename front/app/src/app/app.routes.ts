import { Routes} from '@angular/router';
import {MySugRoutes} from './libs/navigation';
import {ErrorComponent} from './routes/error/error.component';
import {ProfileComponent} from './routes/profile/profile.component';
import {AuthGuard} from '@auth0/auth0-angular';
import {AgendaComponent} from './routes/agenda/agenda.component';
import {LoginComponent} from './routes/login/login.component';
import {UnauthedGuardService} from './services/unauthed.guard.service';
import {RedirectComponent} from './routes/redirect/redirect.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: `/${MySugRoutes.welcome.path}`
  },
  {
    path: MySugRoutes.welcome.path,
    component: RedirectComponent,
    canActivate: [UnauthedGuardService]
  },
  {
    path: MySugRoutes.login.path,
    component: LoginComponent,
  },
  {
    path: MySugRoutes.agenda.path,
    component: AgendaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: MySugRoutes.profile.path,
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: MySugRoutes.error.path,
    component: ErrorComponent,
    canActivate: [AuthGuard]
  },
];
