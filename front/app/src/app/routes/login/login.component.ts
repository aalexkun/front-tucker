import {Component, inject} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import packageInfo from '../../../../package.json';


@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private auth = inject(AuthService);
  protected version = packageInfo.version;

  login() {
    this.auth.loginWithRedirect();
  }
}
