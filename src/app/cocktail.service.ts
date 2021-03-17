import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Cocktail } from './interfaces/cocktail';
import { CocktailRaw } from './interfaces/cocktail-raw';
import { Recipe } from './interfaces/recipe';
import { RecipeRaw } from './interfaces/recipe-raw';


@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  handleError;
   private URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";
   rec = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
   


   getCocktails(ingrediant:string):Observable<CocktailRaw>{
      return this.http.get<CocktailRaw>(`${this.URL}${ingrediant}`)
        }

        
        getRecipes(idDrink:number):Observable<Recipe>{
          return this.http.get<RecipeRaw>(`${this.rec}${idDrink}`).pipe(
            map(data => this.transformCocktailData(data)),
            catchError(this.handleError)
          )
        }
   

  private transformCocktailData(data:RecipeRaw):Recipe{
    return {
      strDrink:data.drinks[0].strDrink,
      strCategory:data.drinks[0].strCategory,
      strInstructions:data.drinks[0].strInstructions,
      strDrinkThumb:data.drinks[0].strDrinkThumb
      
    } 
  }
  
  
  
    constructor(private http: HttpClient) { }
}


