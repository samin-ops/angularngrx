import { createAction, props } from "@ngrx/store";
import { Category } from "./category.state";

export const categoryActions = createAction('[Category] Get categories')

export const categoryActionsSuccess = createAction(
  '[Category] Get categories success',
  props<{ categories: string[] }>()

);
export const categoriesActionsError = createAction(
  '[Category] Get categories error',
  props<{ error: string}>()

);
