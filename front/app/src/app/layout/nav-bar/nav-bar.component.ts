import {Component, inject} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {defaultRoute, getCurrentRouteTitle} from '../../libs/navigation';
import {distinctUntilChanged, filter} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {LogoutButtonComponent} from '../../components/logout-button/logout-button.component';

@Component({
  selector: 'app-nav-bar',
  imports: [
    LogoutButtonComponent
  ],
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {

  private router: Router = inject(Router);
  protected title: string = getCurrentRouteTitle(`/${defaultRoute}`);
  constructor() {

    this.router.events.pipe(
      distinctUntilChanged(),
      filter((x) => x instanceof NavigationEnd),
      takeUntilDestroyed()
    ).subscribe(
      (e) => {
        this.title = getCurrentRouteTitle(e.url);
      }
    )
  }



}
