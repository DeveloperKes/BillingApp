import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponse } from '../../../shared/interfaces/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private readonly _http: HttpClient) { }

  public getAllProducts() {
    return this._http.get<ListResponse<any>>('products');
  }
}
