import {createActionGroup, emptyProps, props } from "@ngrx/store";


export const categoriesActions = createActionGroup({
  source: 'Category',
  events:{
    loadCategories:emptyProps(),
    loadCategorySuccess:props<{ categories: string[]}>(),
    loadCategoriesFailure: props<{error: string}>()
  }

})
