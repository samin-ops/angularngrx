import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CategoryService } from './categories/category.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { categoryActions } from './categories/category.action';
import { selectedCategoriesSuccess } from './categories/category.selector';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MatSlideToggleModule, MatIconModule, MainNavComponent, RouterOutlet, CommonModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  categoryService$ = inject(CategoryService).getCategories()
  private store = inject(Store)

   //categories$ = this.store.select(selectedCategoriesSuccess)

  ngOnInit(){
    this.onGetCategories()

  }

  onGetCategories(){
    this.store.dispatch(categoryActions())
  }


}
