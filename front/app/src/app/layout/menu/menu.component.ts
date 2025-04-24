import {Component,Input} from '@angular/core';
import {MySugRoutes} from '../../libs/navigation';
import {RouterLink} from '@angular/router';
import {LogoutButtonComponent} from '../../components/logout-button/logout-button.component';

@Component({
  selector: 'app-menu',
  imports: [
    RouterLink,
    LogoutButtonComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  protected routes;
  @Input() isMenuOpen: boolean = false;

  constructor() {
    this.routes = Object.values(MySugRoutes).filter(( item) => item.menu);
  }

}
