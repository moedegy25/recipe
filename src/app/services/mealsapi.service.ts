import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsapiService {

  constructor( private _HttpClient:HttpClient) { }

  getMeals(categoryName:string): Observable<any>{

   return this._HttpClient.get<any>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
  }
  
  getcategory(): Observable<any>{

    return this._HttpClient.get<any>(`https://www.themealdb.com/api/json/v1/1/categories.php`)
   }

   getmeailById(mealId:string): Observable<any>{

    return this._HttpClient.get<any>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
   }
   
   getall(): Observable<any>{

    return this._HttpClient.get<any>(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
   }
 

}
