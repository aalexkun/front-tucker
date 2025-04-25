import {Component, inject} from '@angular/core';
import {LogoutButtonComponent} from '../../components/logout-button/logout-button.component';
import {StateService, SugUser} from '../../services/state.service';

@Component({
  selector: 'app-profile',
  imports: [

  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  private stateService = inject(StateService);
  protected user = this.stateService.state().user as SugUser

}
