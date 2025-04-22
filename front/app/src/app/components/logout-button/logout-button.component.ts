import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'app-logout-button',
  imports: [],
  templateUrl: './logout-button.component.html',
  styleUrl: './logout-button.component.css'
})
export class LogoutButtonComponent {
  constructor(
    @Inject(DOCUMENT) public document: Document,
    private auth: AuthService
  ) {}

  logout() {
    this.auth.logout({
      logoutParams: {
        returnTo: this.document.location.origin
      }
    });
  }
}
