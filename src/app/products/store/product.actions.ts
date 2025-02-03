import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Product } from "./product.interface";


export const productActions = createActionGroup({
  source: 'Product',
  events:{
    'Load Products All': emptyProps(),
    'Load Products By Category': props<{category: string}>(),
    'Get Success': props<{products: Product[]}>(),
    'Get Error': props<{error: string}>()
  }
})
