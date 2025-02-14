import {  createFeature, createReducer, on } from "@ngrx/store";
import { Product } from "./product.interface";
import { productActions } from "./product.actions";


export interface ProductState {
  products: Product[] | null,
  productCount:number
  error: string | null,
  isLoading: boolean

}
const initialState: ProductState = {
  products: [],
  productCount:0,
  error: '',
  isLoading:false
}

export const productFeature = createFeature({
  name:'product',
  reducer: createReducer(
    initialState,
    on(productActions.loadProducts,(state)=>({
      ...state,
      isLoading:false,
      error:'',

    })),
    on(productActions.productSuccess,(state, action)=>({
      ...state,
      products:action.products,
      productCount:action.products.length,
      isLoading: true,

    })),
    on(productActions.productFailure,(state, action)=>({
      ...state,
      products:[],
      productCount:0,
      isLoading: false,
      error:action.error
    })),

    // productByCategory
    on(productActions.loadProductsByCategory,(state)=>({
      ...state,
      isLoading:false,
      error: ''
    })),

  )

})

export const {
  name: productFeatureKey,
  reducer: productReducer,
  selectError,
  selectIsLoading,
  selectProductCount,
  selectProducts,
  selectProductState //

} = productFeature






