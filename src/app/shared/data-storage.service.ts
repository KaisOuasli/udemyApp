import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  storeRecipe(){
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://messaging-app-77ec8.firebaseio.com/recipes.json', recipes)
    .subscribe(response =>{
    })
  }

  fetchRecipes(){
    this.http.get<Recipe[]>('https://messaging-app-77ec8.firebaseio.com/recipes.json')
    .subscribe(response =>{
      this.recipeService.setRecipes(response);
    })

  }
}
