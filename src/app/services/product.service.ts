import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductResponse } from '../models/productResponse';
import { Shop } from '../models/shop';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getMatchedProductsPath: string = '/clothes/product/match';
  getMatchedFiveFirstProductsPath: string = '/clothes/product/match/five';
  getAllProductsByTypePath: string = '/clothes/product/byType';

  constructor(private http: HttpClient) { }

  getMatchedProducts(input: string, shops: Shop[]): Observable<ProductResponse[]> {
    let shopsName: string[] = this.retrieveShopsNames(shops);
    const parameters = new HttpParams().set('value', input).set('shops', shopsName.toString());
    return this.http.get<ProductResponse[]>(this.getMatchedProductsPath, {params: parameters});
  }

  getFirstFiveMatchedProducts(input: string, shops: Shop[]): Observable<ProductResponse[]> {
    let shopsName: string[] = this.retrieveShopsNames(shops);
    const parameters = new HttpParams().set('value', input).set('shops', shopsName.toString());
    return this.http.get<ProductResponse[]>(this.getMatchedFiveFirstProductsPath, {params: parameters});
  }

  retrieveShopsNames(shops: Shop[]): string[] {
    let shopsName: string[] = [];
    for (let shop of shops) {
      shopsName.push(shop.name);
    }
    return shopsName;
  }

  getAllProductsByType(type: string): Observable<ProductResponse[]> {
    const parameters = new HttpParams().set('type', type);
    return this.http.get<ProductResponse[]>(this.getAllProductsByTypePath, {params: parameters});
  }
}
