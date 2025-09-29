import { Component, EventEmitter, Output, signal } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { ActivatedRoute } from '@angular/router';
import { ListResponse } from '../../../../shared/interfaces/http';
import { map } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-selector-product',
  imports: [FormsModule],
  templateUrl: './selector-product.component.html',
  styleUrl: './selector-product.component.scss'
})
export class SelectorProductComponent {
  public products = signal<Product[]>([]);
  @Output() selectEvent = new EventEmitter<Product>();
  public productId: number = 0;

  constructor(
    private readonly _activeRoute: ActivatedRoute
  ) {
    _activeRoute.data.pipe(
      map(data => (data['products'] ?? []) as ListResponse<Product>)
    ).subscribe({
      next: (data) => {
        const { code, data: { results } } = data;
        if (code == 0) {
          this.products.set(results);
        }
      },
      complete: () => {
        this.products.set([]);
      }
    })
  }

  onProductChange(newId: number) {
    const product = this.products().find((prod: Product) => prod.id == newId);
    if (product) {
      this.selectEvent.emit(product);
    }
  }
}
