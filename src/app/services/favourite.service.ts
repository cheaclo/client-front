import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponse } from '../models/productResponse';
import { FavouriteProductsResponse } from '../models/favouriteProductsResponse';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  postFavouriteProductPath: string = '/user/favourite-product/add';
  getFavouriteProductsPath: string = '/user/favourite-product/get';
  getProductsByIdPath: string = '/clothes/product/ids';
  deleteFavouriteProductPath: string = '/user/favourite-product/delete/id';

  constructor(private http: HttpClient) { }

  addFavouriteProduct(userId: number, productId: number): void {
    this.http.post<any>(this.postFavouriteProductPath, {userId: userId, productId: productId}).subscribe();
  }

  getFavouriteProductsIds(userId: number): Observable<FavouriteProductsResponse> {
    const parameters = new HttpParams()
                        .set('id', userId);
    return this.http.get<FavouriteProductsResponse>(this.getFavouriteProductsPath, {params: parameters});
  }

  getFavouriteProducts(ids: number[]): Observable<ProductResponse[]> {
    const parameters = new HttpParams()
                        .set('ids', ids.toString());
    return this.http.get<ProductResponse[]>(this.getProductsByIdPath, {params: parameters});
  }

  deleteFavouriteProduct(id: number): void {
    const parameters = new HttpParams()
                        .set('id', id);
    this.http.delete(this.deleteFavouriteProductPath, {params: parameters}).subscribe();
  }
}
