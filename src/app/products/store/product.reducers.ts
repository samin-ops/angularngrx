import {  createReducer, on } from "@ngrx/store";
import { Product } from "./product.interface";
import { productActions } from "./product.actions";

export interface ProductState {
  products: Product[] | null,
  error: string | null,
  productCount:number

}
const initialState: ProductState = {
  products: [],
  error: '',
  productCount:0
}

export const productReducer = createReducer(
  initialState,
    on(productActions.productSuccess, (state, action) => ({
        ...state,
        products: action.products,
        productCount:action.products.length,
        error: ''
    })),
    on(productActions.productFailure, (state, action) => ({
        ...state,
        products: [],
        error: action.error
    }))

)




