import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonResponse, ListResponse } from '../../../shared/interfaces/http';
import { InvoicePayload } from '../interfaces/Invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private readonly _http: HttpClient) { }

  public getAllInvoices() {
    return this._http.get<ListResponse<any>>('invoices');
  }

  public saveInvoice(payload: InvoicePayload) {
    return this._http.post<CommonResponse<number>>('invoices/', payload)
  }
}
