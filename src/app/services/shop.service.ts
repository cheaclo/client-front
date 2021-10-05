import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  getAllShopsPath = '/shop/all';

  constructor(private http: HttpClient) { }

  getShopsName(): Observable<string[]> {
    return this.http.get<string[]>(this.getAllShopsPath)
  }

  getMatchedShops(input: string): Observable<string[]> {
    return of(["hm", "ca"]);
  }
}
