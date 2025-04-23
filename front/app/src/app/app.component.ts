import {Component, inject} from '@angular/core';
import {MenuComponent} from './layout/menu/menu.component';
import {LayoutComponent} from './layout/layout.component';
import {NavigationEnd, Router} from '@angular/router';
import {distinctUntilChanged, filter} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-root',
  imports: [ MenuComponent, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private router = inject(Router);


  protected isMenuOpen = false;
  protected title = 'My Sug';


  constructor() {
    /** Listen on Navigation Change and close the menu if Open **/
    this.router.events.pipe(
      distinctUntilChanged(),
      filter((x) => x instanceof NavigationEnd ),
      takeUntilDestroyed(),
    ).subscribe(this.closeMenu.bind(this))
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }


}
