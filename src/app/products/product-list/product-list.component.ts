import { Component, inject, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { productActions } from '../store/product.actions';
import { selectedProducts, selectProductsByCategory } from '../store/product.selectors';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  private readonly store = inject(Store);

  @Input() categoryName: string="";

  products$ = this.categoryName ? this.store.select(selectProductsByCategory(this.categoryName)) : this.store.select(selectedProducts);

  ngOnInit(){
    this.getProductsByCategory(this.categoryName)
    this.getAllProducts()
  }

  getProductsByCategory(category: string){
    this.store.dispatch(productActions.loadProductsByCategory({category}))
  }

  getAllProducts(){
    this.store.dispatch(productActions.loadProductsAll())
  }

}
