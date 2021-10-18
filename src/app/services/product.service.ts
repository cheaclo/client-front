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
  getAllProductsByTypePath: string = '/clothes/product/by-type';
  getAllProductsByTypeAndCategoryPath: string = '/clothes/product/by-type-and-category';
  getAllProductsByShopPath: string = '/clothes/product/by-shop';
  getAllProductsByShopAndTypeAndCategoryPath: string = '/clothes/product/by-shop-type-and-category';

  constructor(private http: HttpClient) { }

  getMatchedProducts(input: string, shops: Shop[]): Observable<ProductResponse[]> {
    return this.getMatchedProductsByShopString(input, this.retrieveShopsNames(shops).toString());
  }

  getMatchedProductsByShopString(input: string, shops: string): Observable<ProductResponse[]> {
    const parameters = new HttpParams()
                        .set('value', input)
                        .set('shops', shops);
    return this.http.get<ProductResponse[]>(this.getMatchedProductsPath, {params: parameters});
  }

  getFirstFiveMatchedProducts(input: string, shops: Shop[]): Observable<ProductResponse[]> {
    let shopsName: string[] = this.retrieveShopsNames(shops);
    const parameters = new HttpParams()
                        .set('value', input)
                        .set('shops', shopsName.toString());
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

  getAllProductsByTypeAndCategory(type: string, category: string): Observable<ProductResponse[]> {
    const parameters = new HttpParams()
                        .set('type', type)
                        .set('category', category);
    return this.http.get<ProductResponse[]>(this.getAllProductsByTypeAndCategoryPath, {params: parameters});
  }

  getAllProductsByShop(shop: string): Observable<ProductResponse[]> {
    const parameters = new HttpParams().set('shopName', shop);
    return this.http.get<ProductResponse[]>(this.getAllProductsByShopPath, {params: parameters});
  }

  getAllProductsByShopAndTypeAndCategory(shop: string, type: string, category: string): Observable<ProductResponse[]> {
    const parameters = new HttpParams()
                        .set('shopName', shop)
                        .set('type', type)
                        .set('category', category);
    return this.http.get<ProductResponse[]>(this.getAllProductsByShopAndTypeAndCategoryPath, {params: parameters});
  }
}
