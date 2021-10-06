import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  getAllShopsPath = '/shop/all';
  getMatchedShopsPath = 'shop/match';

  constructor(private http: HttpClient) { }

  getShopsName(): Observable<string[]> {
    return this.http.get<string[]>(this.getAllShopsPath);
  }

  getMatchedShops(input: string): Observable<string[]> {
    const parameters = new HttpParams().set('value', input);
    return this.http.get<string[]>(this.getMatchedShopsPath, {params: parameters});
  }
}
