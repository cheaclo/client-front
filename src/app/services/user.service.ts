import { EditUserResponse } from './../models/editUserResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  editUserAllPath = '/user/edit';
  deleteUserPath = '/user/delete/';

  constructor(private http: HttpClient) { }

  editUserAll(requestBody: any): Observable<EditUserResponse> {
    return this.http.put<EditUserResponse>(this.editUserAllPath, requestBody);
  }

  deleteUser(userId: number): void {
    userId = 11;
    console.log(this.deleteUserPath + userId);
    this.http.delete(this.deleteUserPath + userId).subscribe();
  }

  editUserPassword(userId: number, email: string, newPassword: string): Observable<EditUserResponse> {
    console.log(btoa(newPassword));
    return this.http.put<EditUserResponse>(this.editUserAllPath, {
      userId: userId,
      email: email,
      newPassword: btoa(newPassword)
    });
  }
}
