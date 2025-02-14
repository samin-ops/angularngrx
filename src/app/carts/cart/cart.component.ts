import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {  selectCart} from '../store/cart.reducers';
import { cartActions } from '../store/cart.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  private store = inject(Store)
  cart$ = this.store.select( selectCart) // selectedCart
  ngOnInit(){
    this.store.dispatch(cartActions.loadCart())
  }


}
