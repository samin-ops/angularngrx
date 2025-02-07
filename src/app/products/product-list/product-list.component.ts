import { Component, inject, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { productActions } from '../store/product.actions';
import { selectedProducts} from '../store/product.selectors';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule, MatGridListModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  private readonly store = inject(Store);

  @Input() set categoryName(name: string) {
    if (name) {
      this.store.dispatch(productActions.loadProductsByCategory({ category: name }));

    }else{
      this.store.dispatch(productActions.loadProducts())
    }

  }

  products$ = this.store.select(selectedProducts);

  ngOnInit(){


  }



  // reload(){
  //   setTimeout(() => {
  //     window.location.reload();
  //   }, 300000); // Activate after 5 minutes.
  // }

}
