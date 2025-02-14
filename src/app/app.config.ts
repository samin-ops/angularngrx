import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { appRoutes} from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import{provideStoreDevtools} from '@ngrx/store-devtools'
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { categoryFeatureKey, categoryReducer } from './categories/category.reducers';
import { productFeatureKey, productReducer } from './products/store/product.reducers';
import { authFeatureKey, authReducer } from './user/store/user.reducers';
import * as registerEffect from './user/store/user.effects'
import * as loginEffect from './user/store/user.effects'
import * as loadProductsByCategoryEffect  from './products/store/product.effects'
import * as loadProductsAllProductsEffect from './products/store/product.effects'
import * as categoryEffect from './categories/category.effects';
import * as loadCartEffect from './carts/store/cart.effects';
import { cartFeatureKey, cartReducer } from './carts/store/cart.reducers';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withComponentInputBinding(), ),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    provideStore(),
    provideState(authFeatureKey, authReducer),
    provideState(categoryFeatureKey, categoryReducer),
    provideState(productFeatureKey, productReducer),
    provideState(cartFeatureKey,cartReducer ),
    provideEffects([registerEffect, loginEffect]),
    provideEffects([loadProductsByCategoryEffect, loadProductsAllProductsEffect ]),
    provideEffects([categoryEffect]),
    provideEffects([loadCartEffect]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: isDevMode(),
      autoPause: true,
      trace:false,
      traceLimit:75
    }),
  ]
};


