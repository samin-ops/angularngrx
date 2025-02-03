
import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { categoryReducer, CategoryState } from "./category.reducers";

const categoryFeatureKey = 'category'; //=

 export const selectorCategoryState = createFeatureSelector<CategoryState>(categoryFeatureKey);

 export const selectedCategoriesSuccess =  createSelector(
  selectorCategoryState,
  (state:CategoryState)=>state.categories );

 export const selectedError = createSelector(
  selectorCategoryState,
  (state:CategoryState)=>state.error);

  export const categoryFeature = createFeature({
    name:categoryFeatureKey,
    reducer:categoryReducer
  })



