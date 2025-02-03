import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { appRoutes} from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import{provideStoreDevtools} from '@ngrx/store-devtools'
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CategoryEffects } from './categories/category.effects';
import { categoryFeature } from './categories/category.selector';
import { productFeature } from './products/store/product.selectors';
import * as loadProducts  from './products/store/product.effects';
import * as loadProductsAllProducts  from './products/store/product.effects';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withComponentInputBinding(), ),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    provideStore(),
    provideState(categoryFeature),
    //provideState(productFeature),
    provideEffects([CategoryEffects]), // loadProducts  loadProductsAllProducts
    provideStoreDevtools({
      maxAge: 25,
      logOnly: isDevMode(),
      autoPause: true,
      trace:false,
      traceLimit:75
    }),
  ]
};


