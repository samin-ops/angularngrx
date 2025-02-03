import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { provideEffects } from '@ngrx/effects';
import * as loadProducts  from './products/store/product.effects';
import { provideState } from '@ngrx/store';
import { productFeature } from './products/store/product.selectors';
import * as loadProductsAllProducts  from './products/store/product.effects';

export const appRoutes: Routes = [
  {
    path: 'products',
    redirectTo: 'products',
    pathMatch: 'full'
  },
 {
   path: 'products',
   loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
   providers:[
    provideEffects([loadProducts, loadProductsAllProducts]),
    provideState(productFeature)
  ]
 },
  {path:'products/:categoryName',
    loadComponent: () => import('./products/product-list/product-list.component').then(m => m.ProductListComponent),
    providers:[
      provideEffects([loadProducts, loadProductsAllProducts]),
      provideState(productFeature)
    ]
  }

];
