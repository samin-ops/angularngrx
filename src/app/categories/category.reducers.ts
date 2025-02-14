import { createFeature, createReducer, on } from "@ngrx/store";
import { categoriesActions} from "./category.action";


export interface CategoryState {
  categories: string[] | null,
  //currentCategory:string|null,
  error: string | null
}
const initialState: CategoryState = {
  categories: [],
  //currentCategory: '',
  error: ''
}

export const categoryFeature = createFeature({
  name:'category',
  reducer:createReducer(
    initialState,
    on(categoriesActions.loadCategories, (state)=>({
      ...state,
      error:'',
      categories:[]

    })),
    on(categoriesActions.loadCategorySuccess,(state, action)=>({
      ...state,
      categories:action.categories,
    })),
    on(categoriesActions.loadCategoriesFailure, (state, action)=>({
      ...state,
      categories:[],
      error:action.error
    }))
  )
})
export const {
  name: categoryFeatureKey,
  reducer:categoryReducer,
  selectCategories,
  selectError,
  selectCategoryState
}=categoryFeature
