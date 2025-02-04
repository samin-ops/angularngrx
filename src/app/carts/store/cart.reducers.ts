import { createReducer, on } from "@ngrx/store"
import { Cart } from "./cart.interface"
import { cartActions } from "./cart.actions"

export interface CartState {
  cart: Cart[] | null,
  error: string | null,
  //productCount:number

}
const initialState: CartState = {
  cart: [],
  error: '',
  //productCount:0
}

export const cartReducer = createReducer(
  initialState,
    on(cartActions.loadCartSuccess, (state, action) => ({
        ...state,
        cart: action.cart,
        error: ''
    })),
    on(cartActions.loadCartFailure, (state, action) => ({
        ...state,
        cart: [],
        error: action.error
    }))

)
