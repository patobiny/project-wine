import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CocktailService } from '../cocktail.service';
import { CocktailRaw } from '../interfaces/cocktail-raw';
import { Recipe } from '../interfaces/recipe';
import { RecipeRaw } from '../interfaces/recipe-raw';


@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {

  panelOpenState = false;
  strDrink=[];
  strDrinkThumb= [];
  idDrink= [];
  hasError;
  errorMessage;
  arr=[];
  rec=[];
  errMessage;
  nameDrink;
  strCategory;
  strInstructions;
  cocktailOrRecipe:boolean= true;
  strDrinkThumb1;
 
  cocktails$:Observable<CocktailRaw>
  recipes$:Observable<Recipe>
  ingrediant;
 

  seeRecipe(idDrink){
    this.cocktailOrRecipe= false;
    this.rec=[];
    var i;
    this.recipes$ = this.cocktailService.getRecipes(idDrink); 
    this.recipes$.subscribe(
      data => {
        this.nameDrink = data.strDrink;
        this.strCategory = data.strCategory;
        this.strInstructions = data.strInstructions;
        this.strDrinkThumb1 = data.strDrinkThumb;
        
      }, 
      error =>{
        console.log(error.message);
        this.hasError = true;
        this.errorMessage = error.message; 
      }
    )
  }
  cocktailApi(){
    this.cocktailOrRecipe= true;
    this.arr=[];
    var i;
    this.cocktails$ = this.cocktailService.getCocktails(this.ingrediant); 
    this.cocktails$.subscribe(
      data => {
        for (i=0; i <data.drinks.length-1 ; i++){
          if (data== null){
            this.errMessage = true;
          } else{
            this.errMessage = false;
          }
          this.arr.push(i);
          this.strDrink.push(data.drinks[i].strDrink);
          this.strDrinkThumb.push(data.drinks[i].strDrinkThumb);
          this.idDrink.push(data.drinks[i].idDrink);
        }
        

      }, 
      error =>{
      console.log(error.message);
      this.hasError = true;
      this.errorMessage = error.message; 
    }
  )
}

  constructor(private breakpointObserver: BreakpointObserver, private cocktailService:CocktailService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
    this.cocktailOrRecipe= true;
  }
}


