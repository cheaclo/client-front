import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignResponse } from '../models/signResponse';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  signUpPath = '/user/add';
  getCountriesPath = '/user/country/all';

  constructor(private http: HttpClient) { }

  signUp(requestBody: any): Observable<SignResponse> {
    return this.http.post<SignResponse>(this.signUpPath, requestBody);
  }

  getCountires(): Observable<string[]> {
    return this.http.get<string[]>(this.getCountriesPath);
  }
}
