import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { productActions } from "./product.actions";
import { ProductService } from "./product.service";
import { Product } from "./product.interface";

// mapping to a different action
export const loadProductsByCategory = createEffect(
  (actions$ = inject(Actions), productService = inject(ProductService)) => {
    return actions$.pipe(
      ofType( productActions.loadProductsByCategory),
      exhaustMap((action) => {
        return productService.getAllProductsByCategory(action.category).pipe(
          map((products: Product[]) => productActions.productSuccess({products})),
          catchError((error) =>of(productActions.productFailure({ error }))
          )
        );
      })
    );
  },
  { functional: true }
);

export const loadProductsAllProducts = createEffect(
  (actions$ = inject(Actions), productService = inject(ProductService)) => {
    return actions$.pipe(
      ofType( productActions.loadProducts),
      exhaustMap(() => {
        return productService.getAllProducts().pipe(
          map((products: Product[]) => productActions.productSuccess({products})),
          catchError((error) => of(productActions.productFailure({ error }))
          )
        );
      })
    );
  },
  { functional: true }
);
