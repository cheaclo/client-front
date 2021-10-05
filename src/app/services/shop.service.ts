import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  //TODO: replace this list with service incjection
  tempNames: string[] = ['hm', 'ca', 'reserved'];

  constructor() { }

  getShopsName(): Observable<string[]> {
    const shopsName = of(this.tempNames);
    return shopsName;
  }
}
