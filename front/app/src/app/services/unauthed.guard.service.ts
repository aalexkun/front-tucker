import {inject, Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {Router, UrlTree} from '@angular/router';
import {AuthService} from '@auth0/auth0-angular';
import {defaultRoute} from '../libs/navigation';

@Injectable({
  providedIn: 'root'
})
export class UnauthedGuardService {
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isAuthenticated$.pipe(
      map(isAuth => {
        if (isAuth) {
          return this.router.createUrlTree([`/${defaultRoute}`]);
        } else {
          return this.router.createUrlTree(['/login']);
        }
      })
    );
  }
}
