import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoginService } from './login.service';
import { authActions } from './user.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { PersistenceService } from './persistance.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from './user.services';
import { User } from './user.interface';

// sign up effect
export const registerEffect = createEffect(
  (action$ = inject(Actions), authService = inject(UserService)) => {
    return action$.pipe(
      ofType(authActions.register),
      switchMap(({}) => {
        return authService.getUser().pipe(
          map((currentUser: User) => {
            console.log('currentUser:', currentUser);
            return authActions.registerSuccess({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              authActions.registerFailure({
                errors: errorResponse.error,
              })
            );
          })
        );
      })
    );
  },
  { functional: true }
);

// longin effect
export const loginEffect = createEffect(
  (
    action$ = inject(Actions),
    loginService = inject(LoginService),
    persistanceService = inject(PersistenceService)
  ) => {
    return action$.pipe(
      ofType(authActions.login),
      switchMap(({ username, password }) => {
        return loginService.login(username, password).pipe(
          map((response: any) => {
            console.log('token:', response);
            persistanceService.set('token', response);
            return authActions.loginSuccess({ token: response });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              authActions.loginFailure({
                errors: errorResponse.error,
              })
            );
          })
        );
      })
    );
  },
  { functional: true }
);
