import { CurrencyPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { InvoiceService } from '../services/invoice.service';
import { SelectorClientComponent } from '../../clients/elements/selector-client/selector-client.component';
import { Product, SelectorProductComponent } from '../../products';
import { FormsModule } from '@angular/forms';
import { InvoiceDetailPayload } from '../interfaces/InvoiceDetail';

interface ProductInvoice extends Partial<Product> {
  quantity: number,
  total: number
}

@Component({
  selector: 'app-create-invoice',
  imports: [CurrencyPipe, SelectorClientComponent, SelectorProductComponent, FormsModule],
  templateUrl: './create-invoice.component.html',
  styleUrl: './create-invoice.component.scss'
})
export class CreateInvoiceComponent {
  public products = signal<ProductInvoice[]>([]);
  public subtotal = computed(() =>
    this.products().reduce((acc, p) => acc + (p.total ?? 0), 0)
  );
  public tax = computed(() => this.subtotal() * 0.19);
  public total = computed(() => this.subtotal() + this.tax());
  public isValidProducts = computed(() => this.products().every(p => p.id));
  public invoiceNumber: number = 0;
  public clientId = signal<number>(0);

  constructor(private readonly _invoice: InvoiceService) {

  }

  addNewProduct() {
    this.products.update((prev) => [...prev, { quantity: 1, total: 0 }])
  }

  fillCollumns(product: Product, rowNumber: number) {
    this.products.update((prev) =>
      prev.map((prod, index) =>
        index == rowNumber ? { ...product, quantity: prod.quantity, total: (product.price * prod.quantity) } : prod
      )
    )
  }

  increaseQuantity(rowNumber: number) {
    this.products.update((prev) =>
      prev.map((prod, index) =>
        index == rowNumber ? { ...prod, quantity: (prod.quantity + 1), total: (prod.price ?? 0) * (prod.quantity + 1) } : prod
      )
    )
  }

  decreaseQuantity(rowNumber: number) {
    this.products.update((prev) =>
      prev.map((prod, index) =>
        index == rowNumber ? { ...prod, quantity: prod.quantity > 1 ? (prod.quantity - 1) : 1, total: (prod.price ?? 0) * (prod.quantity - 1) } : prod
      )
    )
  }

  saveInvoice() {
    this._invoice.saveInvoice({
      clientId: this.clientId(),
      invoiceDetails: this.products()
        .filter(prod => typeof prod.id === 'number')
        .map<InvoiceDetailPayload>((prod) => ({ productId: prod.id as number, quantity: prod.quantity, notes: "" })),
      invoiceNumber: this.invoiceNumber
    }).subscribe({
      next: (data) => {
        console.log("✌️ Se creo esta chimbada");

      }
    })
  }

  cleanForm(){
    this.products.set([]);
    this.invoiceNumber = 0;
    this.clientId.set(0);
  }
}
