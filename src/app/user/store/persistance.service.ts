import { Injectable } from "@angular/core";

@Injectable({
  providedIn:"root"
})
export class PersistenceService{
  set(key:string, data:unknown):void{
    try {
     localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
      console.log("Error saving in local storage", error);
    }

  }
  get(key:string):any{
   try {
    const localStorageItem  = localStorage.getItem(key)
    return localStorageItem ?JSON.parse(localStorageItem): null
   } catch (error) {
    console.log("Error getting in local storage", error);
    return null
   }
  }
}
