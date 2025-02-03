import { inject, Injectable } from "@angular/core";
import { CategoryService } from "./category.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, exhaustMap, map, mergeMap, of } from "rxjs";
import {categoriesActionsError, categoryActions, categoryActionsSuccess} from './category.action'



 @Injectable()

 export class CategoryEffects{

  private actions$ = inject(Actions);
  private categoryService = inject(CategoryService);

  loadCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(categoryActions),
      exhaustMap(() => this.categoryService.getCategories().pipe(
        map((categories) => categoryActionsSuccess({ categories })),
        catchError((error) =>
          of(categoriesActionsError({ error: 'Could not load categories' })))
      ))
    );
  });

 }
