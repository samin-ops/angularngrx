import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Product } from "./product.interface";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api:string = 'https://fakestoreapi.com/products/category'
  private http = inject(HttpClient)

  constructor() { }

  getAllProducts(){
    return this.http.get<Product[]>('https://fakestoreapi.com/products')
  }

  getAllProductsByCategory(category: string){
    return this.http.get<Product[]>(`${this.api}/${category}`)
  }
}
