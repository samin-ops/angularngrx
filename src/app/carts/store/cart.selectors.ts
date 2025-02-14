import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState, } from "./cart.reducers";
import { productFeature } from "../../products/store/product.reducers";
import * as authFeature from '../../user/store/user.reducers'
const cartFeatureKey = 'cart';

//  export const selectorCartState = createFeatureSelector<CartState>(cartFeatureKey);

//  export const selectedCart =  createSelector(
//   selectorCartState,
//   (state:CartState)=> state.cart
// );

// export const selectCurrentCart = createSelector(
//   selectorCartState,
//   (state)=>state.currentCart
// );

// export const selectedError = createSelector(
//   selectorCartState,
//   (state:CartState)=>state.error
// );

// export const userCartSelector = createSelector(
//   selectCurrentCart,
//   authFeature.selectCurrentUser,
//   productFeature.selectProducts,
//   (cart, user, products) => {
//     if (cart && user) {
//       const cartProduct = products?.filter((product)=>{product.id===cart.products[0].productId})
//       return {
//         ...cart,
//         user,
//         ProductDetails:cartProduct,
//       };
//     }
//     return undefined;
//   }
// );


// export const cartFeature = createFeature({
//   name:cartFeatureKey,
//   reducer:cartReducer
//   })





