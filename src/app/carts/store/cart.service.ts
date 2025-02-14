import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../../products/store/product.interface";
import { Cart } from "./cart.interface";

@Injectable({
  providedIn: 'root'
})

export class CartService{

  private api:string = 'https://fakestoreapi.com/carts'

  private http = inject(HttpClient)


  addToCart(data: Cart): Observable<Product> {
    return this.http.post<Product>(`${this.api}`, data);
  }

  // getCart
  getCart(){
    return this.http.get<Cart[]>(`${this.api}`)
  }

  getCartById(id: number){
    return this.http.get<Cart>(`https://fakestoreapi.com/carts/${id}`)
  }


}
