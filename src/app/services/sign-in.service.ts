import { SignResponse } from '../models/signResponse';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  signInPath = '/user/sign-in';

  constructor(private http: HttpClient) { }

  signIn(email: string, password: string): Observable<SignResponse> {
    return this.http.post<SignResponse>(this.signInPath, {email: email, password: password});
  }
}
