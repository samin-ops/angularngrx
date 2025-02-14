import { Component, inject, Input} from '@angular/core';
import { Store } from '@ngrx/store';
import { productActions } from '../store/product.actions';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { Product } from '../store/product.interface';
import { selectProducts } from '../store/product.reducers';
import { cartActions } from '../../carts/store/cart.actions';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule, MatGridListModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent{

  @Input() products:Product[] =[] //

  private readonly store = inject(Store);

  @Input() set categoryName(name: string) {
    name ? this.store.dispatch(productActions.loadProductsByCategory({ category: name })): this.store.dispatch(productActions.loadProducts())
  }
  products$ = this.store.select(selectProducts);


  addToCart(productId: number, userId: number, quantity: number){
    this.store.dispatch(cartActions.addItem({productId, userId, quantity}))
  }

}
