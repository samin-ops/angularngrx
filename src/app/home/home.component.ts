import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ProductListComponent } from "../products/product-list/product-list.component";
import { Store } from "@ngrx/store";
import { selectProducts } from "../products/store/product.reducers";

@Component({
  selector:'scs-home',
  standalone:true,
  styleUrl:'./home.component.css',
  templateUrl:'./home.component.html',
  imports:[CommonModule, RouterOutlet, ProductListComponent]
})

export class HomeComponent{
  private store = inject(Store)
  products$ = this.store.select(selectProducts)

}
