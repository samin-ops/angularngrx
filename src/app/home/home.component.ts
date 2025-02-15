import { CommonModule } from "@angular/common";
import { Component, inject, Input } from "@angular/core";

import { Store } from "@ngrx/store";
import { selectProducts } from "../products/store/product.reducers";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { productActions } from "../products/store/product.actions";
import { cartActions } from "../carts/store/cart.actions";
import { RouterModule } from "@angular/router";
@Component({
  selector:'scs-home',
  standalone:true,
  styleUrl:'./home.component.css',
  templateUrl:'./home.component.html',
  imports:[CommonModule, MatCardModule, MatButtonModule, MatGridListModule,RouterModule]
})

export class HomeComponent{
  private store = inject(Store)
  products$ = this.store.select(selectProducts)


  @Input() set categoryName(name: string) {
    if (name) {
      this.store.dispatch(productActions.loadProductsByCategory({ category: name }))

    }else{
      this.store.dispatch(productActions.loadProducts())

    }
  }

    // addToCart(productId: number, userId: number, quantity: number){
    //   this.store.dispatch(cartActions.addItem({productId, userId, quantity}))
    // }
}



