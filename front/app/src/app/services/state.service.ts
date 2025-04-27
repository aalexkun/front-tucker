import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {AuthService, IdToken, User} from '@auth0/auth0-angular';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {combineLatest, distinctUntilChanged, filter} from 'rxjs';
import {NavigationEnd, Router} from '@angular/router';
import {AgendaStateType} from './state.agenda.type';
import {ApiService} from './api.service';

export interface SugUser extends User {
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
  private api = inject(ApiService);

  /** User state **/
  private _state: WritableSignal<AppState> = signal({
    isAuthenticated: false,
    user: null
  });
  state = this._state.asReadonly();

  /** Agenda State **/
  private _agenda: WritableSignal<AgendaStateType> = signal({
    is: 'AgendaStateInit'
  })
  agenda = this._agenda.asReadonly();



  constructor() {

    /** Listen on Auth change **/
    combineLatest([this.auth.isAuthenticated$,this.auth.user$]).pipe(takeUntilDestroyed()).subscribe(this.onAuthStatusChange.bind(this))

    /** Listen on Navigation Change and close the menu if Open **/
    this.router.events.pipe(
      distinctUntilChanged(),
      filter((x) => x instanceof NavigationEnd ),
      takeUntilDestroyed(),
    ).subscribe(this.onRouteChanged.bind(this))

    /** Listen on token changes and refresh store when avalaible **/
    this.auth.idTokenClaims$.pipe(takeUntilDestroyed()).subscribe(this.onTokenChange.bind(this))
  }

  onRouteChanged() {

  }

  onTokenChange(idToken: IdToken | null | undefined) {

    if(idToken){
      this.api.getAgenda().subscribe(agenda => {
        this._agenda.set({
          is: 'AgendaStateReady',
          week: 'Text',
          items: []
        })
      })

    } else {

    }
  }

  onAuthStatusChange(combined: [boolean, User | null | undefined]) {
    const [isAuth, user] = combined;
    if(isAuth && user) {
      this._state.set({
        isAuthenticated: true,
        user: {
          name: user.name,
          email: user.email,
          badge: 'Admin',
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
