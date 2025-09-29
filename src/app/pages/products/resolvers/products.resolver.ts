import { ResolveFn } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { inject } from '@angular/core';
import { ListResponse } from '../../../shared/interfaces/http';

export const allProductsResolver: ResolveFn<ListResponse<any>> = (route, state) => {
  const service = inject(ProductsService);
  return service.getAllProducts();
};
