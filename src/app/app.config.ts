import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { appRoutes} from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import{provideStoreDevtools} from '@ngrx/store-devtools'
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { CategoryEffects } from './categories/category.effects';
import { categoryFeature } from './categories/category.selector';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes), provideClientHydration(), provideAnimationsAsync(),
    provideHttpClient(),
    provideStore(),
    provideState(categoryFeature),
    provideEffects([CategoryEffects]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: isDevMode(),
      autoPause: true,
      trace:false,
      traceLimit:75
    })

  ]
};


