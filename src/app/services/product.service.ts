import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Shop } from '../models/shop';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getMatchedProducts(input: string, shops: Shop[]): Observable<string[]> {
    // const parameters = new HttpParams().set('value', input);
    return of(['Ripped jeans', 'Nice jeans']);
    // return this.http.get<string[]>(this.getMatchedShopsPath, {params: parameters});
  }
}
