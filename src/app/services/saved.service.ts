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

  constructor(private http: HttpClient) { }

  addSavedProduct(userId: number, productId: number): void {
    this.http.post<any>(this.postSavedProductPath, {userId: userId, productId: productId}).subscribe();
  }

  getSavedProducts(userId: number): Observable<ProductResponse[]> {
    const parameters = new HttpParams()
                        .set('id', userId);
    this.http.get<SavedProductsResponse>(this.getSavedProductsPath, {params: parameters})
    .subscribe(response => {

    });

    return new Observable;
  }
}
