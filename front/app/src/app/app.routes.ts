import { Routes } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ErrorComponent} from './components/error/error.component';
import {ProfileComponent} from './components/profile/profile.component';
import {MySugRoutes} from './libs/navigation';

export const routes: Routes = [
  {
    path: MySugRoutes.error.path,
    component: ErrorComponent
  },
  {
    path: MySugRoutes.profile.path,
    component: ProfileComponent
  }
];
