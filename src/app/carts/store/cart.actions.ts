import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Cart } from "./cart.interface";

export const cartActions = createActionGroup({
  source: 'Cart',
  events:{
    loadCart: emptyProps(),
    loadCartSuccess: props<{cart: Cart[]}>(),
    loadCartFailure: props<{error: string}>()
  }
})
