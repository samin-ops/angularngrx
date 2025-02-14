import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Cart } from "./cart.interface";

export const cartActions = createActionGroup({
  source: 'Cart',
  events:{
    'Add Item ':props<{productId:number, userId: number, quantity:number}>(),
    'load Cart': emptyProps(),
    'loadCart Success': props<{cart: Cart[]}>(),
    'loadCart Failure': props<{error: string}>(),
    'Update Quantity': props<{ cartId: number; quantity: number }>(),
    'Remove Item': props<{ cartId: number }>(),
    'Clear Cart': emptyProps()

  }
})
