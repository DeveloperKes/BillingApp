import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { InvoiceService } from '../services/invoice.service';
import { SelectorClientComponent } from '../../clients/elements/selector-client/selector-client.component';

@Component({
  selector: 'app-create-invoice',
  imports: [CurrencyPipe, SelectorClientComponent],
  templateUrl: './create-invoice.component.html',
  styleUrl: './create-invoice.component.scss'
})
export class CreateInvoiceComponent {
  constructor(private readonly _invoice: InvoiceService) {

  }
}
