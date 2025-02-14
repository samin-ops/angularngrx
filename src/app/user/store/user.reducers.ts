import { createFeature, createReducer, on } from "@ngrx/store"
import { authActions } from "./user.actions"
import { AuthStateInterface } from "./types/auth.state"

export const initialState:AuthStateInterface={
  isSubmitting:false,
  isLoading:false,
  currentUser:[],
  errors:null,
}

const authFeature = createFeature({
  name:'auth',
reducer:createReducer(
initialState,
// register
on(authActions.register,(state)=>({
...state,
isSubmitting : true,
errors:null,
isLoading:false
})),
on(authActions.registerSuccess,(state, action)=>({
  ...state,
  isSubmitting:false,
  user: action.currentUser,
  isLoading: false
})),
on(authActions.registerFailure, (state, action)=>({
  ...state,
  isSubmitting:false,
  errors:action.errors,
  isLoading: false
})),
// login
on(authActions.login, (state)=>({
  ...state,
  isSubmitting:true,
  isLoading :true,
  errors:null
})),
on(authActions.loginSuccess, (state, action)=>({
  ...state,
  isSubmitting:false,
  token:action.token,
  isLoading:true

})),
on(authActions.loginFailure, (state, action)=>({
  ...state,
  isSubmitting:false,
  error:action.errors,
  isLoading: false
}))
)
})

export const {
  name: authFeatureKey,
  reducer:authReducer,
  selectIsSubmitting,
  selectCurrentUser,
  selectIsLoading,
  selectErrors
} = authFeature
