import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SavedService {
  postSavedProductPath: string = '/user/saved-product/add';

  constructor(private http: HttpClient) { }

  addSavedProduct(userId: number, productId: number): void {
    this.http.post<any>(this.postSavedProductPath, {userId: userId, productId: productId}).subscribe();
  }
}
