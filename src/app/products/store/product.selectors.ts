import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { productReducer, ProductState } from "./product.reducers";

const productFeatureKey = 'category';

 export const selectorProductState = createFeatureSelector<ProductState>(productFeatureKey);

 export const selectedProducts =  createSelector(
  selectorProductState,
  (state:ProductState)=>
    state.products
);

export const selectProductsByCategory =(category:string) =>
  createSelector(
    selectorProductState,
    (state)=>state.products?.filter(product=>product.category===category))

 export const selectedError = createSelector(
  selectorProductState,
  (state:ProductState)=>state.error);

  export const productFeature = createFeature({
    name:productFeatureKey,
    reducer:productReducer
  })
