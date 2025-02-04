import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { cartActions } from "./cart.actions";
import { inject } from "@angular/core";
import { CartService } from "./cart.service";


export const loadCart = createEffect(
  (actions$ = inject(Actions), cartService = inject(CartService)) => {
    return actions$.pipe(
      ofType( cartActions.loadCart),
      exhaustMap(() => {
        return cartService.getCart().pipe(
          map((cart) => cartActions.loadCartSuccess({cart})),
          catchError((error) =>of(cartActions.loadCartFailure({ error }))
          )
        );
      })
    );
  },
  { functional: true }
);
