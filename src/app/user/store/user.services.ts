import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { User } from "./user.interface";

@Injectable({
  providedIn: "root",
})
export class UserService {

  private http = inject(HttpClient)


  getUser() {
    return this.http.get<User>("https://fakestoreapi.com/users/2")
  }


}
