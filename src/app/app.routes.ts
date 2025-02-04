import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import * as loadProducts  from './products/store/product.effects';
import { provideState } from '@ngrx/store';
import { productFeature } from './products/store/product.selectors';
import * as loadProductsAllProducts  from './products/store/product.effects';
import * as loadCart  from './carts/store/cart.effects';
import { cartFeature } from './carts/store/cart.selectors';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full'
  },
 {
   path: 'product',
   loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
   providers:[
    provideEffects([loadProducts, loadProductsAllProducts]),
    provideState(productFeature)
  ]
 },
  {path:'product/:categoryName',
    loadComponent: () => import('./products/product-list/product-list.component').then(m => m.ProductListComponent),
    providers:[
      provideEffects([loadProducts, loadProductsAllProducts]),
      provideState(productFeature)
    ]
  },
  {
    path:'cart',
    loadComponent: () => import('./carts/cart/cart.component').then(m => m.CartComponent),
    providers:[
      provideEffects([loadProducts, loadProductsAllProducts, loadCart]),
      provideState(cartFeature)
    ]
  }

];
