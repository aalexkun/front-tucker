import {Component, inject} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private auth = inject(AuthService);

  login() {
    this.auth.loginWithRedirect();
  }
}
