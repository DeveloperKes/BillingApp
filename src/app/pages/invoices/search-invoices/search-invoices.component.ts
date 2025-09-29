import { Component, signal } from '@angular/core';
import { SelectorClientComponent } from '../../clients/elements/selector-client/selector-client.component';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { InvoiceService } from '../services/invoice.service';

@Component({
  selector: 'app-search-invoices',
  imports: [SelectorClientComponent, FormsModule, CurrencyPipe],
  templateUrl: './search-invoices.component.html',
  styleUrl: './search-invoices.component.scss'
})
export class SearchInvoicesComponent {
  public clientId = signal<number>(0);
  public invoiceNumber: number = 0;

  public invoices = signal<any[]>([]);

  constructor(private readonly _invoices: InvoiceService) { }

  search() {
    this._invoices.getAllInvoices().subscribe({
      next: (data)=>{
        console.log("Data invoices", data);
        
      }
    })
  }
}
