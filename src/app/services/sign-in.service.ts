import { SignIn } from './../models/signIn';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  signInPath = '/user/sign-in';

  constructor(private http: HttpClient) { }

  signIn(email: string, password: string): Observable<SignIn> {
    const parameters = new HttpParams()
      .set('email', email)
      .set('password', password);
    return this.http.get<SignIn>(this.signInPath, {params: parameters});
  }
}
