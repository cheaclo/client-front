import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Shop } from '../models/shop';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getMatchedProductsPath: string = '/products/match';

  constructor(private http: HttpClient) { }

  getMatchedProducts(input: string, shops: Shop[]): Observable<string[]> {
    let shopsName: string[] = [];
    for (let shop of shops) {
      shopsName.push(shop.name);
    }

    const parameters = new HttpParams().set('value', input).set('shops', shopsName.toString());
    return this.http.get<string[]>(this.getMatchedProductsPath, {params: parameters});
  }
}
