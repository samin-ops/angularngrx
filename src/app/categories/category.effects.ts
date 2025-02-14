import { inject} from "@angular/core";
import { CategoryService } from "./category.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { categoriesActions } from "./category.action";

 export const categoryEffect = createEffect(
   (actions$ = inject(Actions), categoryService = inject(CategoryService)) => {
     return actions$.pipe(
       ofType(categoriesActions.loadCategories),
       exhaustMap(() => {
         return categoryService.getCategories().pipe(
           map((categories: any) => categoriesActions.loadCategorySuccess({categories})),
           catchError((error) => of(categoriesActions.loadCategoriesFailure({ error }))
           )
         );
       })
     );
   },
   { functional: true }
 );

