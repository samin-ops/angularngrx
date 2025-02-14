import { createActionGroup, props } from "@ngrx/store";
import { User } from "./user.interface";
import { ErrorsInterface } from "./types/errors.interface";


export const authActions = createActionGroup({
    source:'auth',
    events:{
      Register: props<{request: User}>(),
      'Register Success': props<{currentUser: User}>(),
      'Register Failure': props<{errors: ErrorsInterface}>(),
  //login actions
      Login: props<{username:string, password:string}>(),
      'Login Success': props<{token: string}>(),
      'Login Failure': props<{errors: ErrorsInterface}>(),
    }
})
