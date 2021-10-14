import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryResponse } from '../models/categoryResponse';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  getAllCategoriesPath = '/clothes/category/by-type';

  constructor(private http: HttpClient) { }

  getAllCategories(type: string): Observable<CategoryResponse[]> {
    const parameters = new HttpParams().set('type', type);
    return this.http.get<CategoryResponse[]>(this.getAllCategoriesPath, {params: parameters});
  }
}
