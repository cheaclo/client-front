import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  addSearchedPhrasePath = '/user/phrase/add';

  constructor(private http: HttpClient) { }

  addPhrase(userId: Number, searchedPhrase: string): void {
    this.http.post<any>(this.addSearchedPhrasePath, {userId: userId, searchedPhrase: searchedPhrase}).subscribe();
  }
}
