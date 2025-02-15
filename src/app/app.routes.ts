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
  {
    path:'product/:categoryName',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    canMatch:[authGuard]
  },
  {
    path:'cart',
    loadComponent: () => import('./carts/cart/cart.component').then(m => m.CartComponent),
    canMatch:[authGuard]
  },
  {
    path:'profile',
    loadComponent: () => import('./user/profile/profile.component').then(m => m.ProfileComponent),
    canMatch:[authGuard]
  }

];
