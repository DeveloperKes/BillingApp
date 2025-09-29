import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponse } from '../../../shared/interfaces/http';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private readonly _http: HttpClient) { }

  public getAllInvoices() {
    return this._http.get<ListResponse<any>>('invoices');
  }
}
