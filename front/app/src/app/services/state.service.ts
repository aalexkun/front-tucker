import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {AuthService, User} from '@auth0/auth0-angular';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {combineLatest, distinctUntilChanged, filter} from 'rxjs';
import {NavigationEnd, Router} from '@angular/router';

interface SugUser extends User{
  badge: string;
}

interface UnauthorizedState {
  isAuthenticated: false;
  user: null;
}
interface AuthenticatedState {
  isAuthenticated: true;
  user: SugUser;
}

type AppState = UnauthorizedState | AuthenticatedState;


@Injectable({
  providedIn: 'root'
})
export class StateService {
  private router = inject(Router);
  private auth = inject(AuthService);

  private _state: WritableSignal<AppState> = signal({
    isAuthenticated: false,
    user: null
  });

  state = this._state.asReadonly();

  constructor() {
    combineLatest([this.auth.isAuthenticated$,this.auth.user$]).pipe(takeUntilDestroyed()).subscribe(this.onAuthStatusChange.bind(this))

    /** Listen on Navigation Change and close the menu if Open **/
    this.router.events.pipe(
      distinctUntilChanged(),
      filter((x) => x instanceof NavigationEnd ),
      takeUntilDestroyed(),
    ).subscribe(this.onRouteChanged.bind(this))
  }

  onRouteChanged() {

  }

  onAuthStatusChange(combined: [boolean, User | null | undefined]) {
    const [isAuth, user] = combined;
    if(isAuth && user) {
      this._state.set({
        isAuthenticated: true,
        user: {
          name: user.name,
          email: user.email,
          badge: 'admin',
          icon: user.picture
        }
      })
    } else {
      this._state.set({
        isAuthenticated: false,
        user: null
      })
    }
  }
}
