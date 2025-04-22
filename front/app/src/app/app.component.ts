import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginButtonComponent} from './components/login-button/login-button.component';
import {AuthService} from '@auth0/auth0-angular';
import {toSignal} from '@angular/core/rxjs-interop';
import {LogoutButtonComponent} from './components/logout-button/logout-button.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginButtonComponent, LogoutButtonComponent, UserProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';

  private auth = inject(AuthService);
  protected isAuth = toSignal(this.auth.isAuthenticated$)
}
