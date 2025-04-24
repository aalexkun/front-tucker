import { Routes} from '@angular/router';
import {navigationRoute} from './libs/navigation';
import {ErrorComponent} from './routes/error/error.component';
import {ProfileComponent} from './routes/profile/profile.component';
import {AuthGuard} from '@auth0/auth0-angular';
import {AgendaComponent} from './routes/agenda/agenda.component';
import {LoginComponent} from './routes/login/login.component';
import {UnauthedGuardService} from './services/unauthed.guard.service';
import {RedirectComponent} from './routes/redirect/redirect.component';
import {RegisterComponent} from './components/register/register.component';
import {NotificationComponent} from './components/notification/notification.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: `/redirect`
  },
  {
    path: 'redirect',
    component: RedirectComponent,
    canActivate: [UnauthedGuardService]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: navigationRoute.agenda.path,
    component: AgendaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: navigationRoute.register.path,
    component: RegisterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: navigationRoute.profile.path,
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: navigationRoute.notification.path,
    component: NotificationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'error',
    component: ErrorComponent,
  },

];
