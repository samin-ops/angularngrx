import { createReducer, on } from "@ngrx/store";
import { categoriesActionsError,  categoryActionsSuccess } from "./category.action";

export interface CategoryState {
  categories: string[] | null,
  currentCategory:string,
  error: string | null
}
const initialState: CategoryState = {
  categories: [],
  currentCategory: '',
  error: ''
}
export const categoryReducer = createReducer(
  initialState,
  on(categoryActionsSuccess, (state, action) => {
    return {
      ...state,
      categories:action.categories,
      error:''
    }
  }),
  on(categoriesActionsError, (state, action) => {
    return {
      ...state,
      categories:[],
      error:action.error
    }
  })
);

