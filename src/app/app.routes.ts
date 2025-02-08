import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import * as loadProducts  from './products/store/product.effects';
import { provideState } from '@ngrx/store';
import { productFeature } from './products/store/product.selectors';
import * as loadProductsAllProducts  from './products/store/product.effects';
import * as loadCart  from './carts/store/cart.effects';
import { cartFeature } from './carts/store/cart.selectors';
import { authGuard } from './user/store/login.guard';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./user/login/login.component').then(m => m.LoginComponent)
  },
 {
   path: 'product',
   loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
   providers:[provideEffects([loadProducts, loadProductsAllProducts]),provideState(productFeature)],
   canMatch:[authGuard]
 },
  {path:'product/:categoryName',
    loadComponent: () => import('./products/product-list/product-list.component').then(m => m.ProductListComponent),
    providers:[provideEffects([loadProducts, loadProductsAllProducts]),provideState(productFeature), ],
    canMatch:[authGuard]
  },
  {
    path:'cart',
    loadComponent: () => import('./carts/cart/cart.component').then(m => m.CartComponent),
    providers:[provideEffects([loadProducts, loadProductsAllProducts, loadCart]),provideState(cartFeature)],
    canMatch:[authGuard]
  },
  {
    path:'profile',
    loadComponent: () => import('./user/profile/profile.component').then(m => m.ProfileComponent),
    //canMatch:[authGuard]
  }

];
