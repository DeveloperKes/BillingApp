import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonResponse, ListResponse } from '../../../shared/interfaces/http';
import { Invoice, InvoicePayload } from '../interfaces/Invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private readonly _http: HttpClient) { }

  public getAllInvoices() {
    return this._http.get<ListResponse<Invoice>>('invoices');
  }

  public getInvoiceByNumber(invoiceNumber: number) {
    return this._http.get<ListResponse<Invoice>>(`invoices/reference/${invoiceNumber}`);
  }
  public getInvoiceByClient(clientId: number) {
    return this._http.get<ListResponse<Invoice>>(`invoices/client/${clientId}`);
  }

  public saveInvoice(payload: InvoicePayload) {
    return this._http.post<CommonResponse<number>>('invoices/', payload)
  }
}
