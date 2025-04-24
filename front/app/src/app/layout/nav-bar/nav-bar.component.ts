import { Component } from '@angular/core';
import {NavigationRoute, navigationRoute} from '../../libs/navigation';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {

  protected readonly routes: NavigationRoute[] = Object.values(navigationRoute);
}
