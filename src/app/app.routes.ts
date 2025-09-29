import { Routes } from '@angular/router';
import { allClientsResolver } from './pages/clients/resolvers/clients.resolver';
import { allProductsResolver } from './pages/products/resolvers/products.resolver';
import { allInvoicesResolver } from './pages/invoices/resolvers/invoices.resolver';

export const routes: Routes = [
    {
        path: "create",
        loadComponent: () => import('./pages/invoices').then(c => c.CreateInvoiceComponent),
        resolve: {
            clients: allClientsResolver,
            products: allProductsResolver
        }
    },
    {
        path: '',
        loadComponent: () => import('./pages/invoices').then(c => c.SearchInvoicesComponent),
        resolve: {
            invoices: allInvoicesResolver,
            clients: allClientsResolver,
        }
    },
    { path: "", pathMatch: 'full', redirectTo: "" },
    { path: "**", pathMatch: 'full', redirectTo: "" },
];
