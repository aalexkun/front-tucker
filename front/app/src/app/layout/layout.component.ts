import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DockComponent} from './dock/dock.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';



@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    DockComponent,
    NavBarComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {



  protected isMenuOpen = false;
  protected title = ''



  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onRouteChanged() {
    this.title = ' '
    this.isMenuOpen = false;
  }
}
