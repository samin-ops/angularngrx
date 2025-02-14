import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { combineLatest, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { CategoryService } from '../categories/category.service';
import { Store } from '@ngrx/store';
import { selectCategories, selectError } from '../categories/category.reducers';
import { categoriesActions } from '../categories/category.action';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.css',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    CommonModule,
    RouterModule,
    MatCardModule,
    MatMenuModule

]
})
export class MainNavComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(map(result => result.matches),shareReplay()
    );


    private store = inject(Store)
    categoryService = inject(CategoryService).getCategories()
    // categories selectors


    // categories$ =  combineLatest({
    //   categories: this.store.select(selectCategories),
    //   error: this.store.select(selectError)
    // })

    categories$ = this.store.select(selectCategories)


    ngOnInit(){
      this.store.dispatch(categoriesActions.loadCategories())

    }







}
