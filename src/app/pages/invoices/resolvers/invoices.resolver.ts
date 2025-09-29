import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { ListResponse } from '../../../shared/interfaces/http';
import { Invoice } from '../interfaces/Invoice';
import { inject } from '@angular/core';
import { InvoiceService } from '../services/invoice.service';

export const allInvoicesResolver: ResolveFn<Observable<ListResponse<Invoice>>> = (route, state) => {
  const service = inject(InvoiceService);
  return service.getAllInvoices();
};
