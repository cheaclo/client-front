import { EditUserResponse } from './../models/editUserResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  editUserAllPath = '/user/edit/all';

  constructor(private http: HttpClient) { }

  editUserAll(requestBody: any): Observable<EditUserResponse> {
    return this.http.put<EditUserResponse>(this.editUserAllPath, requestBody);
  }
}
