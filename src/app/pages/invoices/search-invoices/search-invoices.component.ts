import { Component, signal } from '@angular/core';
import { SelectorClientComponent } from '../../clients/elements/selector-client/selector-client.component';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { InvoiceService } from '../services/invoice.service';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of, Subject } from 'rxjs';
import { ListResponse } from '../../../shared/interfaces/http';
import { Invoice } from '../interfaces/Invoice';

@Component({
  selector: 'app-search-invoices',
  imports: [SelectorClientComponent, FormsModule, CurrencyPipe, DatePipe],
  templateUrl: './search-invoices.component.html',
  styleUrl: './search-invoices.component.scss'
})
export class SearchInvoicesComponent {
  public clientId = signal<number>(0);
  public invoiceNumber: number = 0;

  public invoices = signal<Invoice[]>([]);
  public typeSearch = "client";

  constructor(
    private readonly _invoices: InvoiceService,
    private readonly _active: ActivatedRoute
  ) {
    _active.data.pipe(
      map(data => (data['invoices'] ?? []) as ListResponse<Invoice>)
    ).subscribe({
      next: (data) => {
        const { code, data: { results } } = data;
        if (code == 0) {
          this.invoices.set(results);
        }
      }
    })
  }

  search() {
    let sub = new Observable<ListResponse<Invoice>>;
    if (this.typeSearch == "client" && this.clientId() != 0) sub = this._invoices.getInvoiceByClient(this.clientId());
    else if (this.typeSearch == "number" && this.invoiceNumber > 0) sub = this._invoices.getInvoiceByNumber(this.invoiceNumber);

    sub.subscribe({
      next: (data) => {
        console.log(data);
        const { code, data: { results } } = data;
        if (code == 0) {
          this.invoices.set(results);
        }
      }
    })
  }
}
