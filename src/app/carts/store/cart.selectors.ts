import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState, cartReducer } from "./cart.reducers";

const cartFeatureKey = 'cart';

 export const selectorProductState = createFeatureSelector<CartState>(cartFeatureKey);

 export const selectedCart =  createSelector(
  selectorProductState,
  (state:CartState)=>
    state.cart
);

export const selectedError = createSelector(
  selectorProductState,
  (state:CartState)=>state.error);

  export const cartFeature = createFeature({
    name:cartFeatureKey,
    reducer:cartReducer
  })
