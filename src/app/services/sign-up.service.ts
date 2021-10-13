import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignIn } from '../models/signIn';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  signUpPath = '/user/add';
  getCountriesPath = '/user/country/all';

  constructor(private http: HttpClient) { }

  getCountires(): Observable<string[]> {
    return this.http.get<string[]>(this.getCountriesPath);
  }
}
