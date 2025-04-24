import {Component, inject} from '@angular/core';
import {LayoutComponent} from './layout/layout.component';
import {StateService} from './services/state.service';
import {RouterOutlet} from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [LayoutComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected stateService : StateService = inject(StateService);
}
