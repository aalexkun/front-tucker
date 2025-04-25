import { Component } from '@angular/core';
import {NavigationRoute, navigationRoute} from '../../libs/navigation';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-dock',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './dock.component.html'
})
export class DockComponent {

  protected readonly routes: NavigationRoute[] = Object.values(navigationRoute);
}
