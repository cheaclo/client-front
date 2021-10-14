import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryByShopResponse } from '../models/categoryByShopResponse';
import { CategoryResponse } from '../models/categoryResponse';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  getAllCategoriesPath = '/clothes/category/by-type';
  getAllCategoriesByShopPath = '/clothes/category/by-shop';

  constructor(private http: HttpClient) { }

  getAllCategories(type: string): Observable<CategoryResponse[]> {
    const parameters = new HttpParams().set('type', type);
    return this.http.get<CategoryResponse[]>(this.getAllCategoriesPath, {params: parameters});
  }

  getAllCategoriesByShop(shop: string): Observable<CategoryByShopResponse[]> {
    const parameters = new HttpParams().set('shopName', shop);
    return this.http.get<CategoryByShopResponse[]>(this.getAllCategoriesByShopPath, {params: parameters});
  }
}
