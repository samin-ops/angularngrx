import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  isLoggedIn = false


  private http = inject(HttpClient)
  private api: string = 'https://fakestoreapi.com/auth/login'


  login(username: string, password: string) {
    return this.http.post(this.api, { username, password })

}

getToken(){
  return localStorage.getItem('token')
}




}
