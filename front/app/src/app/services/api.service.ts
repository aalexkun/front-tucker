import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, Observable, switchMap, throwError} from 'rxjs';
import {AuthService} from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient);
  private auth = inject(AuthService);
  private apiUrl = 'https://dev-api.sug-app.link/v1';

  private getAuthentificationToken(): Observable<string | undefined> {
    return this.auth.idTokenClaims$.pipe(
      map(auth => auth?.__raw) // Extract the raw token
    );
  }



  getAgenda(): Observable<string> { // Returns Observable<string>
    return this.getAuthentificationToken().pipe(
      switchMap(token => {
        if (!token) {
          return throwError(() => new Error('Authentication token not available.'));
        }

        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });

        return this.http.get<string>(`${this.apiUrl}/agenda`, { headers });
      })
    );
  }



}
