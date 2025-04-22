import {Component, inject} from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  protected auth = inject(AuthService);

  protected user = toSignal(this.auth.user$);



}
