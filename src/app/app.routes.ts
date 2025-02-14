import { Routes } from '@angular/router';
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
   path:'register',
   loadComponent:()=>import('./user/register/register.component').then(m=>m.RegisterComponent)
  },
 {
   path: 'product',
   loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
   canMatch:[authGuard]
 },
  {path:'product/:categoryName',
    loadComponent: () => import('./products/product-list/product-list.component').then(m => m.ProductListComponent),

    canMatch:[authGuard]
  },
  {
    path:'cart',
    loadComponent: () => import('./carts/cart/cart.component').then(m => m.CartComponent),
    //providers:[provideEffects([loadProducts, loadProductsAllProducts, loadCart]),provideState(cartFeature)],
    canMatch:[authGuard]
  },
  {
    path:'profile',
    loadComponent: () => import('./user/profile/profile.component').then(m => m.ProfileComponent),
    canMatch:[authGuard]
  }

];
