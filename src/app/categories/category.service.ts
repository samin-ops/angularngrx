import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from './category.state';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http = inject(HttpClient);
  api: string = 'https://fakestoreapi.com/products/categories';


  constructor() { }

  getCategories():Observable<string[]>{
    return this.http.get<string[]>(this.api)

  }

}
