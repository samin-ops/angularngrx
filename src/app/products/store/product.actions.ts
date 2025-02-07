import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Product } from "./product.interface";



export const productActions = createActionGroup({
  source: 'Product',
  events:{
    loadProducts: emptyProps(),
    loadProductsByCategory: props<{category: string}>(),
    productSuccess: props<{products: Product[]}>(),
    productFailure: props<{error: string}>()
  }
})
