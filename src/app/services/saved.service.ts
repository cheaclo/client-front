import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponse } from '../models/productResponse';
import { SavedProductsResponse } from '../models/savedProductsResponse';

@Injectable({
  providedIn: 'root'
})
export class SavedService {
  postSavedProductPath: string = '/user/saved-product/add';
  getSavedProductsPath: string = '/user/saved-product/get';
  getProductsByIdPath: string = '/clothes/product/ids';
  deleteSavedProductPath: string = '/user/saved-product/delete/id';

  constructor(private http: HttpClient) { }

  addSavedProduct(userId: number, productId: number): void {
    this.http.post<any>(this.postSavedProductPath, {userId: userId, productId: productId}).subscribe();
  }

  getSavedProductsIds(userId: number): Observable<SavedProductsResponse> {
    const parameters = new HttpParams()
                        .set('id', userId);
    return this.http.get<SavedProductsResponse>(this.getSavedProductsPath, {params: parameters});
  }

  getSavedProducts(ids: number[]): Observable<ProductResponse[]> {
    const parameters = new HttpParams()
                        .set('ids', ids.toString());
    return this.http.get<ProductResponse[]>(this.getProductsByIdPath, {params: parameters});
  }

  deleteSavedProduct(id: number): void {
    const parameters = new HttpParams()
                        .set('id', id);
    this.http.delete(this.deleteSavedProductPath, {params: parameters}).subscribe();
  }
}
