import { createFeature, createReducer, createSelector, on } from "@ngrx/store"
import { Cart } from "./cart.interface"
import { cartActions } from "./cart.actions"


export interface CartState {
  cart: Cart[] ,
  error: string | null,
  isLoading: boolean


}
const initialState: CartState = {
  cart: [] ,
  isLoading:false,
  error: '',
}

export const cartFeature = createFeature({
  name:'cart',
  reducer: createReducer(
    initialState,
    on(cartActions.loadCart,(state)=>({
      ...state,
      isLoading:false,
      error:''

    })),
    on(cartActions.loadCartSuccess,(state,{cart})=>({
      ...state,
      cart:cart,
      isLoading:false
    })),
    on(cartActions.loadCartFailure,(state,{error})=>({
      ...state,
      cart:[],
      error:error
    })),

    on(cartActions.addItem, (state, { productId, userId, quantity }) => {
      const existItem = state.cart.find((item) => item.products.some((product) => product.productId === productId));
      return existItem
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.products.some((product) => product.productId === productId)
                ? {
                    ...item,
                    products: item.products.map((product) =>
                      product.productId === productId ? { ...product, quantity: product.quantity + quantity } : product
                    )
                  }
                : item
            ),
            isLoading: false,
            error: ''
          }
        : {
            ...state,
            cart: [
              ...state.cart,
              {
                id: state.cart.length + 1,
                userId,
                date: new Date().toISOString(),
                user: { id: userId, email:'', username: '', password: '', name: { firstname: '', lastname: '' }, phone: '', address: { street: '', city: '', geolocation:{lat: '', long: ''}, number: '', zipcode: ''  } },
                products: [{ productId, quantity }]
              }
            ],
            isLoading: false,
            error: ''
          };
    }),
    // Update Quantity
    on(cartActions.updateQuantity, (state, { cartId, quantity }) => ({
      ...state,
      items: state.cart.map(item =>
        item.id === cartId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    })),
    // Remove Item
    on(cartActions.removeItem, (state, { cartId }) => ({
      ...state,
      items: state.cart.filter(item => item.id !== cartId)
    })),
    // Clear Cart
    on(cartActions.clearCart, (state) => ({
      ...state,
      cart: []
    }))
  )

})

export const {
  name: cartFeatureKey,
  reducer:cartReducer,
  selectCart,
  selectCartState,
  selectError,
  selectIsLoading

} = cartFeature


// // Custom selectors
// export const selectCartTotalItems = createSelector(
//   selectCart,
//   items => items.reduce((total, products) => total + products.quantity, 0)
// );

// export const selectCartTotalPrice = createSelector(
//   selectCart,
//   items => items.reduce((total, item) => total + (item.quantity * item.price), 0)
// );



