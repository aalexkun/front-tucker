import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {MenuComponent} from './menu/menu.component';


@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    FooterComponent,
    MenuComponent
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
